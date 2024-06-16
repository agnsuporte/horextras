"use client";
import { signIn } from "next-auth/react";

export const userAuthenticate = async (
  prevState: string | undefined,
  formData: FormData,
) => {
  try {
    const response = await signIn("credentials", {
      redirect: false,
      formData,
    });

    if (!response?.error) {
      return true;
    } else {
      return {
        errors: {
          error: ["Campo Senha e de confirmação deve ser iguais."],
        },
        message: "Credenciais invalidas.",
      };
    }
  } catch (erro) {
    throw erro;
  }
};
