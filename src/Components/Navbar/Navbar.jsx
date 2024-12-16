import { useState } from "react";
import Link from "../Link/Link";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";

function NavBar() {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-sky-800 p-4 text-white">
      {/* Menu Toggle Button */}
      <div
        className="text-3xl md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoIosCloseCircle /> : <BsFillMenuButtonWideFill />}
      </div>

      {/* Menu Items */}
      <ul
        className={`absolute md:static bg-sky-800 md:flex md:items-center justify-around transition-all duration-500 ease-in-out ${
          open ? "top-16" : "-top-72"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} name={route.name} path={route.path} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
