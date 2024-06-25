import React from "react";
import styles from "./styles.module.css";
import { HomeTitle } from "./HomeTitle";
import { FlowerCard } from "./HomeFlower";

const Home = () => {
  return (
    <>
      <div className={styles["flower_container"]}>
        <div className={styles["content"]}>
          <HomeTitle />
          <FlowerCard />
        </div>
      </div>
    </>
  );
};

export default Home;
