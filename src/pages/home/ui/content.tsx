import React from "react";
import styles from "./styles.module.css";
import { HomeTitle } from "./HomeTitle";
import { HomeFlower } from "./HomeFlower";
import FlowerCards from "./FlowerCards/FlowerCards";
import UI from "@/src/shared/ui";

const Home = () => {
  return (
    <>
      <div className={styles["flower_container"]}>
        <div className={styles["content"]}>
          <HomeTitle />
          <HomeFlower />
        </div>
      </div>
      <UI.ErrorBoundary>
        <FlowerCards />
      </UI.ErrorBoundary>
    </>
  );
};

export default Home;
