"use client";

import { SessionProvider } from "next-auth/react";

interface InterSessionProvider {
  children: React.ReactNode;
}

function AuthProvider({ children }: InterSessionProvider) {
  return <SessionProvider>{children}</SessionProvider>;
}

export { AuthProvider };
