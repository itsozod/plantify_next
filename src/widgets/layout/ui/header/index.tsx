import React from "react";
import styles from "./header.module.css";
import {
  IconCart,
  IconSearch,
  IconUser,
  PlantifyLogo,
} from "@/src/shared/icons";

const Header = () => {
  return (
    <header className={styles["header_layout"]}>
      <div className={styles["header_layout_container"]}>
        <nav className={styles["nav_container"]}>
          <ul
            style={{
              display: "flex",
              gap: "25px",
            }}
          >
            <li className={styles["header_list"]}>
              <a className={styles["header_link"]} href="#">
                Shop
              </a>
            </li>
            <li className={styles["header_list"]}>
              <a className={styles["header_link"]} href="#">
                Products
              </a>
            </li>
            <li className={styles["header_list"]}>
              <a className={styles["header_link"]} href="#">
                Fertilizer
              </a>
            </li>
            <li className={styles["header_list"]}>
              <a className={styles["header_link"]} href="#">
                Guide
              </a>
            </li>
          </ul>
          <div>
            <PlantifyLogo />
          </div>
        </nav>
        <div className={styles["icons_container"]}>
          <IconSearch />
          <IconUser />
          <IconCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
