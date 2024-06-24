import React from "react";
import styles from "./styles.module.css";
import UI from "@/src/shared/ui";
export const HomeTitle = () => {
  return (
    <>
      <div className={styles["card"]}>
        <div>
          <h1
            style={{
              fontSize: "50px",
            }}
          >
            Happiness
          </h1>
          <h1
            style={{
              fontSize: "50px",
            }}
          >
            blooms from
          </h1>
          <h1
            style={{
              fontSize: "50px",
            }}
          >
            within
          </h1>
        </div>
        <div>
          <p>Our environment, the world in which we live and</p>
          <p>work, is a mirror of our attitudes and expectations.</p>
        </div>
        <div className={styles["btn_container"]}>
          <UI.Button className={styles["shop_btn"]}>Shop now</UI.Button>
          <UI.Button className={styles["explore_btn"]}>Explore more</UI.Button>
        </div>
      </div>
    </>
  );
};
