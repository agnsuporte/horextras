"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

export const SignOutButton = () => {
  return (
    <Link
      href="#"
      onClick={() => signOut()}
      className="bg-orange-400 hover:bg-orange-600 px-3 py-1 rounded text-white font-normal"
    >
      Sair
    </Link>
  );
};
