import React from "react";
import styles from "./styles.module.css";
import { PlantifyLogo } from "@/src/shared/icons";

import { ButtonsContainer } from "./ButtonsContainer";
import { Links } from "./Links";

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
            <Links />
          </ul>
          <div>
            <PlantifyLogo />
          </div>
        </nav>
        <ButtonsContainer />
      </div>
    </header>
  );
};

export default Header;
