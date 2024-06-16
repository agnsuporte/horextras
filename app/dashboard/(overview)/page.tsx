"use client";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import { CardsSkeleton } from "../../ui/skeletons";
import CardWrapper from "../ui/cards";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Dashboard Page</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>      
    </main>
  );
}

// const Card = () => {
//   const { data: session } = useSession();

//   return (
//     <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
//       <div className="flex items-start sm:gap-8">
//         <div
//           className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
//           aria-hidden="true"
//         >
//           <div className="flex items-center gap-1">
//             <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
//             <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
//             <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
//             <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
//             <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
//           </div>
//         </div>

//         <div>
//           <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
//             Usuário #
//           </strong>

//           <h3 className="mt-4 text-lg font-medium sm:text-xl">
//             <a href="#" className="hover:underline">
//               {" "}
//               Sessão iniciada ...{" "}
//             </a>
//           </h3>

//           <p className="mt-1 text-sm text-gray-700">
//             {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
//           </p>

//           <div className="mt-4 sm:flex sm:items-center sm:gap-2">
//             <div className="flex items-center gap-1 text-gray-500">
//               <svg
//                 className="h-4 w-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                 ></path>
//               </svg>

//               <p className="text-xs font-medium">Expira em:</p>
//             </div>

//             <span className="hidden sm:block" aria-hidden="true">
//               &middot;
//             </span>

//             <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
//               {session && session.expires}
//             </p>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };
