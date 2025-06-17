'use client'

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button onClick={() => signOut({callbackUrl: "/"})} className="bg-red-950 text-white p-3 rounded-2xl font-mono hover:bg-red-500"> Sair </button> // ver sobre essa sintaxe
    )
}