import { Link } from "react-router-dom";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/login",
    text: "Login",
  },
  {
    href: "/products",
    text: "Products",
  },
];

export default function Navbar() {
  return (
    <nav className="w-full flex flex-row gap-4">
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            to={link.href}
            className="text-base font-bold hover:bg-neutral-900"
          >
            {link.text}
          </Link>
        );
      })}
    </nav>
  );
}
