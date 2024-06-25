import React, { Suspense } from "react";
import styles from "./styles.module.css";
import { HomeTitle } from "./HomeTitle";
import { HomeFlower } from "./HomeFlower";
import FlowerCards from "./FlowerCards/FlowerCards";
import ErrorBoundary from "./FlowerCards/error";

const Home = () => {
  return (
    <>
      <div className={styles["flower_container"]}>
        <div className={styles["content"]}>
          <HomeTitle />
          <HomeFlower />
        </div>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <FlowerCards />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Home;
