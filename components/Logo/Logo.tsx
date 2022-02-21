import Link from "next/link";
import { FiCoffee } from "react-icons/fi";

export const Logo = () => (
  <Link href="/" passHref>
    <FiCoffee size={50} color="#4ADE7B" />
  </Link>
);
