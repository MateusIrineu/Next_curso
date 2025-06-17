'use client';

import {signIn} from "next-auth/react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-200">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       
        <h1>Trabalhando com Autenticação</h1>

        <div className="mt-3.5">
          <button type="submit" onClick={() => signIn("github", {callbackUrl: "/dashboard"})} className="bg-blue-950 rounded-2xl text-white p-5 font-mono cursor-pointer hover:bg-blue-700 shadow hover:text-red">Entrar com Github</button>
        </div>

      </main>
    </div>
  );
}
