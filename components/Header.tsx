"use client";

import React, { useState } from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { links } from "@/app/lib/list-links";
import { SignOutButton } from "./signout-button";
import { useSession } from "next-auth/react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-gray-200 dark:bg-gray-600 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="header-wrapper flex items-center justify-between">
          <div className="header-logo">
            <h1 className="font-semibold text-white leading-relaxed">
              <Link href="/">Exthoras</Link>
            </h1>
          </div>
          <div className="toggle md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
            >
              <svg
                className="h-6 w-6 fill-current text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <WebNavbar />
        </div>
      </div>
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

const WebNavbar: React.FC = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <nav className="navbar hidden md:block text-white">
      <ul className="flex space-x-8 text-sm font-semibold">
        {links.map((link) => {
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={clsx("hover:text-orange-500", {
                  "active border-b-2 border-orange-500 pb-2":
                    pathname === link.href,
                })}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        {!session && (
          <li>
            <Link
              href="/auth/login"
              className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-white font-normal"
            >
              Login
            </Link>
          </li>
        )}
        {session && (
          <li>
            <SignOutButton />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
