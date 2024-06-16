"use client";

import React from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/app/lib/list-links";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, setIsOpen }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <Transition
      show={isOpen}
      enter="transition duration-300 transform -translate-x-full"
      enterFrom=""
      enterTo="transform translate-x-0"
      leave="transition duration-300 transform"
      leaveFrom="transform translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="fixed top-0 left-0 h-full bg-white z-30 w-64 shadow-lg p-5">
        <div className="close">
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="divide-y">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx("my-4 inline-block hover:text-orange-500", {
                    "my-4 inline-block active font-bold":
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
                className="my-4 inline-block hover:text-orange-500"
              >
                Login
              </Link>
            </li>
          )}

          {session && (
            <li>
              <Link
                href="#"
                onClick={() => signOut()}
                className="my-4 inline-block hover:text-orange-500"
              >
                Sair
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Transition>
  );
};

export default MobileNavbar;
