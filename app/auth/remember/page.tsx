import { Input } from "../components/Input";
import { Submit } from "../components/Submit";
import Link from "next/link";
import { Heard } from "../components/Heard";

export default function RememberPage() {
  return (
    <div className="flex  min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Heard>Email que está registrado.</Heard>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <Input id="email" name="email" type="email" />
          </div>

          <div>
            <Submit>Enviar</Submit>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Em seguida verifique seu email!{" "}
          <Link
            href="/auth/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Voltar
          </Link>
        </p>
      </div>
    </div>
  );
}
