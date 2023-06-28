'use client';

import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

import { useRouter } from "next/navigation";
import { isEmailValid, isPasswordValid } from "../utils";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);

    const router = useRouter();

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (session !== null) { // user logged in
                router.push("/");
            }
        });
    }, []);


    const toRegisterPage = () => {
        router.push("/register");
    }

    const login = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isFormValid()) return;

        setIsError(false);

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            setIsError(true);
            return;
        }

        if (data) {
            setIsUserLoggedIn(true);
            setTimeout(() => {
                router.push("/");
            }, 1000);
        }
    }

    const isFormValid = () => {
        return isEmailValid(email) && isPasswordValid(password);
    }

    return (
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

                <form onSubmit={login} className="flex flex-col">
                    <input
                        className="border-2 border-red-600 rounded-lg p-4 focus:outline-none focus:border-2 focus:border-red-800"
                        placeholder="E-posta"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {isEmailValid(email) ? null : <p className="text-red-600">E-posta adresin geçerli değil.</p>}
                    <br />
                    <input
                        type="password"
                        className="border-2 border-red-600 rounded-lg p-4 focus:outline-none focus:border-2 focus:border-red-800"
                        placeholder="Şifre"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isPasswordValid(password) ? null : <p className="text-red-600">Şifren en az 8 karakterli olmalı.</p>}
                    <div hidden={!isUserLoggedIn}>
                        <br />
                        <div className="bg-green-400 p-4 rounded-lg">
                            Giriş yapıldı. Yönlendiriliyorsunuz...
                        </div>
                    </div>
                    <div hidden={!isError}>
                        <br />
                        <div className="bg-red-400 p-4 rounded-lg">
                            Giriş yapılamadı. E-posta adresi veya şifre yanlış.
                        </div>
                    </div>
                    <br />
                    <button className={`border-4 border-red-600 bg-red-600 p-4 rounded-lg text-white focus:outline-none focus:border-4 focus:border-red-800 ${isFormValid() ? "" : "opacity-50"}`} disabled={!isFormValid()}>Giriş Yap</button>
                </form>
                <br />
                <button className="border-4 border-red-600 p-4 rounded-lg  focus:outline-none focus:border-4 focus:border-red-800" onClick={toRegisterPage}>Kayıt Ol</button>
            </div>
        </div>
    )
}