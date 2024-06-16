import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

export const links = [
  {
    name: "Início",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Folha",
    href: "/dashboard/sheet",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: UserGroupIcon,
  },
];
