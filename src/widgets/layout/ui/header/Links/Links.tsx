import Link from "next/link";
import React from "react";
import styles from "./Links.module.css";

const links = [
  {
    id: 1,
    href: "/",
    title: "Shop",
  },
  {
    id: 2,
    href: "#",
    title: "Products",
  },
  {
    id: 3,
    href: "#",
    title: "Fertilizer",
  },
  {
    id: 4,
    href: "#",
    title: "Guide",
  },
];

export const Links = () => {
  return (
    <>
      {links?.map((link) => {
        return (
          <Link
            key={link?.id}
            className={styles["header_link"]}
            href={link?.href}
          >
            {link?.title}
          </Link>
        );
      })}
    </>
  );
};
