"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

import { Input } from "../components/Input";
import { Submit } from "../components/Submit";
import { Heard } from "../components/Heard";
import { createUser, State } from "../lib/actons";

const RegisterForm = () => {
  const initialState: State = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <div className="flex  min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Heard>Preencha com os seus dados.</Heard>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action={dispatch} method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Seu nome
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              aria-describedby="name-error"
            />
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              aria-describedby="email-error"
            />
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Senha
              </label>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              aria-describedby="password-error"
            />
          </div>
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {state.errors?.password &&
              state.errors.password.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password_confirm"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirme a senha
              </label>
            </div>
            <Input
              id="password_confirm"
              name="password_confirm"
              type="password"
              aria-describedby="password_confirm-error"
            />
          </div>
          <div
            id="password_confirm-error"
            aria-live="polite"
            aria-atomic="true"
          >
            {state.errors?.password_confirm &&
              state.errors.password_confirm.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <div>
            <Submit>Salvar</Submit>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <Link
            href="/auth/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Voltar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
