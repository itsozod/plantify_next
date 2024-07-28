"use client";
import { useFlowerCard } from "@/src/entities/FlowerCard/api/api";
import { Flower } from "@/src/entities/FlowerCard/lib/types";
import { FlowerCardUi } from "@/src/entities/FlowerCard/ui/FlowerCardUi";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import styles from "./FlowerCards.module.css";
import FlowersLoader from "./loader/loader";
import useSWRMutation from "swr/mutation";

type SignUpType = {
  username: string;
  title: string;
};

const FlowerCards = () => {
  const [formData, setFormData] = useState({
    username: "",
    title: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const signUp = async (url: string, { arg }: { arg: SignUpType }) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(arg),
      });
      const data = await res.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  const { data, error, isLoading, mutate } = useFlowerCard();
  const {
    data: mutateData,
    isMutating,
    trigger,
  } = useSWRMutation("http://localhost:5000/plants", signUp);
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
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <button
        onClick={async () => {
          await trigger(formData);
        }}
      >
        Add flower
      </button>
    </div>
  );
};

export default FlowerCards;
