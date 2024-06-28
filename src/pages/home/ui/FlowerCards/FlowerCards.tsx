"use client";
import { useFlowerCard } from "@/src/entities/FlowerCard/api/api";
import { Flower } from "@/src/entities/FlowerCard/lib/types";
import { FlowerCardUi } from "@/src/entities/FlowerCard/ui/FlowerCardUi";
import { useMemo } from "react";
import styles from "./FlowerCards.module.css";
import FlowersLoader from "./loader/loader";

const FlowerCards = () => {
  const { data, error, isLoading } = useFlowerCard();
  const FlowerCardParser = useMemo(() => {
    return data?.map((flower: Flower) => {
      return (
        <>
          <FlowerCardUi flower={flower} />
        </>
      );
    });
  }, [data]);

  if (isLoading) return <FlowersLoader />;
  if (error) return <div>Error ocurred</div>;

  return (
    <div
      style={{
        padding: "10px 50px 10px 50px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "#004f44",
          }}
        >
          Featured
        </h1>
        <div className={styles["plants_container"]}>{FlowerCardParser}</div>
      </div>
    </div>
  );
};

export default FlowerCards;
