'use client';

import CreateAdvertisement from "./components/create_advertisement";
import FilterCard from "./components/filter_card";
import AdvertisementList from "./components/post_lists";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "./supabase";
import { User } from "@supabase/supabase-js";

export default function Home() {

  const router = useRouter();

  const [user, setUser] = useState<null | User>(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);



  useEffect(() => {

    supabase.auth.onAuthStateChange(async (event, session) => {
      if (session === null) { // user not logged in
        useRouter().push("/login");
      } else {
        const { data, error } = await supabase.from("users").select("*").eq("id", session.user?.id).single();
        console.log(data);
        setName(data?.name ?? "");
        setUser(session.user);
        setIsLoading(false);
      }

    });
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  }


  return (
    <main className="flex flex-col items-stretch relative w-full">
      <nav className="bg-red-600 p-4 flex justify-end items-center">
        <p className="text-white mx-4 font-bold">{name}</p>
        <button
          onClick={logout}
          className="font-bold text-white mx-4 p-2 rounded-lg border-2 border-white hover:bg-white hover:text-red-600">
          Çıkış Yap
        </button>
      </nav>
      <br /> <br /> <br />
      <div className="max-w-5xl p-4 self-center">
        <CreateAdvertisement />
        <br />
        <br />
        <FilterCard />
        <br />
        <AdvertisementList />
      </div>
    </main>
  )
}
