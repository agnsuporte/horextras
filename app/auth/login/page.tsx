"use client";

import { Submit } from "../components/Submit";
import Link from "next/link";
import { Heard } from "../components/Heard";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { signIn } from "next-auth/react";
import AuthError from "next-auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuthenticate = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!response?.error) {
        router.refresh();
        router.push("/dashboard");
      } else {
        setError("Credenciais inválidas.");
      }
    } catch (erro) {
      if (erro instanceof AuthError) {
        switch (erro) {
          case "CredentialsSignin":
            setError("Credenciais inválidas.");
          default:
            setError("Algo deu errado.");
        }
      }
      throw erro;
    }
  };

  return (
    <div className="flex  min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Heard>Informe suas credenciais</Heard>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleAuthenticate} method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Senha
              </label>
              <div className="text-sm">
                <Link
                  href="/auth/remember"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {error && (
            <>
              <div className="flex flex-row">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{error}</p>
              </div>
            </>
          )}
          <div>
            <Submit>Entrar</Submit>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Não é membro?{" "}
          <Link
            href="/auth/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Faça o seu registro aqui
          </Link>
        </p>
      </div>
    </div>
  );
}
