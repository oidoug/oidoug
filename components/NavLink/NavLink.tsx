import NextLink from "next/link";
import { Link } from "@nextui-org/react";

interface NavProps {
  a: string;
  children: React.ReactNode;
}

export const NavLink = ({ a, children }: NavProps) => (
  <NextLink href={a} passHref>
    <Link color="primary">{children}</Link>
  </NextLink>
);
