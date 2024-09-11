import React from "react";
import { Link } from "react-router-dom";
export const Test = () => {
  const links = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link to={link.href} key={link.name}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};
