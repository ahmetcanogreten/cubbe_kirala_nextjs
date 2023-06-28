'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { isEmailValid, isNameValid, isPasswordValid } from "../utils";

import { supabase } from "../../supabase";

export default function RegisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isUserCreated, setIsUserCreated] = useState(false);
    const [isError, setIsError] = useState(false);

    const router = useRouter();

    const toLoginPage = () => {
        router.push("/login");
    }


    const register = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isFormValid()) return;

        setIsError(false);


        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            setIsError(true);
            return;
        }

        if (data) {
            let userId = data.user!.id;

            const { error } = await supabase.from("users").insert({
                id: userId,
                name: name,
            });

            if (error) {
                setIsError(true);
                return;
            }

            setIsUserCreated(true);
            setTimeout(() => {
                router.push("/login");
            }, 1000);
        }
    }

    const isFormValid = () => {
        return isNameValid(name) && isEmailValid(email) && isPasswordValid(password);
    }

    return (
        <>
            <div className="flex flex-col flex-grow justify-center">
                <div className="flex flex-col border-4 border-red-600 rounded-lg p-8">
                    <img
                        width={600}
                        src="/bilim_agaci.jpg"
                        className="self-center rounded-lg "
                    />
                    <br />
                    <br />
                    <h1 className="text-5xl font-light self-center">
                        ODTÜ Cübbemi Bul
                    </h1>
                    <br />
                    <br />

                    <form onSubmit={register} className="flex flex-col">
                        <input className="border-2 border-red-600 rounded-lg p-4 focus:outline-none focus:border-2 focus:border-red-800" placeholder="Adın" onChange={(e) => setName(e.target.value)} />
                        {isNameValid(name) ? null : <p className="text-red-600">Adın boş olamaz.</p>}
                        <br />
                        <input className="border-2 border-red-600 rounded-lg p-4 focus:outline-none focus:border-2 focus:border-red-800" placeholder="E-posta" onChange={(e) => setEmail(e.target.value)} />
                        {isEmailValid(email) ? null : <p className="text-red-600">E-posta adresin geçerli değil.</p>}
                        <br />
                        <input type="password" className="border-2 border-red-600 rounded-lg p-4 focus:outline-none focus:border-2 focus:border-red-800" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
                        {isPasswordValid(password) ? null : <p className="text-red-600">Şifren en az 8 karakterli olmalı.</p>}
                        <div hidden={!isUserCreated}>
                            <br />
                            <div className="bg-green-400 p-4 rounded-lg">
                                Kullanıcı oluşturuldu. Yönlendiriliyorsunuz...
                            </div>
                        </div>
                        <div hidden={!isError}>
                            <br />
                            <div className="bg-red-400 p-4 rounded-lg">
                                Kullanıcı oluşturulurken bir şey oldu.
                            </div>
                        </div>
                        <br />
                        <button type="submit" className={`border-4 border-red-600 bg-red-600 p-4 rounded-lg text-white focus:outline-none focus:border-4 focus:border-red-800 ${isFormValid() ? "" : "opacity-50"}`} disabled={!isFormValid()}>Kayıt Ol</button>
                    </form>



                    <br />
                    <button className="border-4 border-red-600 p-4 rounded-lg  focus:outline-none focus:border-4 focus:border-red-800" onClick={toLoginPage}>Giriş Yap</button>

                </div>
            </div>
        </>
    )
}