"use server";

import AuthError from "next-auth";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { prisma } from "@/app/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";
import { User } from "@/app/lib/definitions";

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    password_confirm?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(3, "Seu nome deve conter no mínimo 3 caracteres."),
  email: z.string().email("Informe um email válido"),
  password: z.string().min(6, "Senha deve conter no mínimo 6 caracteres."),
  password_confirm: z.string().min(6, "Deve conter no mínimo 6 caracteres."),
});

const CreateUser = FormSchema.omit({ id: true });

export async function createUser(prevState: State, formData: FormData) {
  noStore();
  const validatedFields = CreateUser.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    password_confirm: formData.get("password_confirm"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Corriga os erros.",
    };
  }
  // Prepare data for insertion into the database
  const { name, email, password, password_confirm } = validatedFields.data;

  if (password != password_confirm) {
    return {
      errors: {
        password_confirm: [
          "Senhas incompativeis",
          "Campo Senha e de confirmação deve ser iguais.",
        ],
      },
      message: "Campos Senha e de confirmação deve ser iguais.",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.log("[ERROR_CREATE_USER]: ", error);
    return {
      errors: {
        password_confirm: ["[ERROR_CREATE_USER]: Ocorreu um error inesperado?"],
      },
      message: "Database Error: Fala ao registrar.",
    };
  }

  revalidatePath("/auth/login");
  redirect("/auth/login");
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  noStore();
  try {
    const user = await prisma.users.findUnique({ where: { email: email } });
    return user as User;
  } catch (error) {
    console.error("Falha ao buscar usuário! :", error);
    throw new Error("Falha ao buscar usuário.");
  }
}
