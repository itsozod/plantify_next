"use client";
import React from "react";
import styles from "./ButtonsContainer.module.css";
import { IconCart, IconSearch, IconUser } from "@/src/shared/icons";
import { useRouter } from "next/navigation";
import UI from "@/src/shared/ui";

export const ButtonsContainer = () => {
  const router = useRouter();
  return (
    <div className={styles["icons_container"]}>
      <IconSearch />
      <IconUser />
      <UI.Button
        onClick={() => router.push("/cart")}
        style={{
          cursor: "pointer",
          background: "transparent",
          border: "none",
        }}
      >
        <IconCart />
      </UI.Button>
    </div>
  );
};
