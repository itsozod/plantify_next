"use client";
import React from "react";
import styles from "./styles.module.css";
import { HomeTitle } from "./HomeTitle";
import { HomeFlower } from "./HomeFlower";
import FlowerCards from "./FlowerCards/FlowerCards";
import UI from "@/src/shared/ui";
import { SWRConfig } from "swr";

function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem("app-cache", appCache);
  });

  // We still use the map for write & read for performance.
  return map;
}

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
        <SWRConfig
          value={{
            provider: localStorageProvider,
            revalidateIfStale: true,
            revalidateOnMount: false,
            revalidateOnReconnect: false,
            revalidateOnFocus: false,
          }}
        >
          <FlowerCards />
        </SWRConfig>
      </UI.ErrorBoundary>
    </>
  );
};

export default Home;
