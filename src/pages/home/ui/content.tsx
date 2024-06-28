import React from "react";
import styles from "./styles.module.css";
import { HomeTitle } from "./HomeTitle";
import { HomeFlower } from "./HomeFlower";
import FlowerCards from "./FlowerCards/FlowerCards";
import ErrorBoundary from "@/src/shared/ui/error/error";

const Home = () => {
  return (
    <>
      <div className={styles["flower_container"]}>
        <div className={styles["content"]}>
          <HomeTitle />
          <HomeFlower />
        </div>
      </div>
      <ErrorBoundary>
        <FlowerCards />
      </ErrorBoundary>
    </>
  );
};

export default Home;
