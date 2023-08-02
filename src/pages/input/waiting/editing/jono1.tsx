// import { z } from "zod";
// import { signIn, signOut, useSession } from "next-auth/react";
// import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Header } from "~/componentsRoot/Header";
import MainView from "~/pages/components/jpComponents/MainView";
import StickyFooter from "~/pages/components/jpComponents/StickyFooter";
// import { api } from "~/utils/api";
import TopNav from "~/pages/components/jpComponents/TopNav";

export default function Jono1() {
  const { user } = useUser();
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#09090b] to-[#d4d4d8]">
        <div>
          <div>
            <TopNav />
            <div className="p-2 text-3xl font-bold text-white">
              {user?.firstName
                ? `User logged in: ${user.firstName}`
                : "No user logged in."}
            </div>
          </div>
          <div>
            <MainView />
          </div>
          <div className="relative flex h-20 items-center justify-center bg-gray-600">
            <StickyFooter />
          </div>
        </div>
      </main>
    </div>
  );
}
