import React from "react";
import styles from "./loader.module.css";

const FlowersLoader = () => {
  return (
    <div className={styles["loader_container"]}>
      <div className={styles["loader"]}></div>
    </div>
  );
};

export default FlowersLoader;
