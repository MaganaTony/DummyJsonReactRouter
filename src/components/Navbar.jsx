import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  function handleLoginLogout() {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/login");
    }

    if (!isLoggedIn) {
      navigate("/login");
    }
  }
  return (
    <nav className="w-full flex flex-row gap-4 border-b border-neutral-500">
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            to={link.href}
            className="text-center w-full p-2"
          >
            {link.text}
          </Link>
        );
      })}
      <div className="text-center w-full p-2" onClick={handleLoginLogout}>
        {isLoggedIn ? "Logout" : "Login"}
      </div>
    </nav>
  );
}
