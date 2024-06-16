import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/providers/auth-provider";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exthoras",
  description: "Gerenciar horas extras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body className={inter.className}>
          <div className="dark:bg-gray-600">
            <Header />
          </div>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
