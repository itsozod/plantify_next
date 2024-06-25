import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Flower1 from "@/src/shared/assets/image 1.png";
import Flower2 from "@/src/shared/assets/image 2.png";
import Flower3 from "@/src/shared/assets/image 3.png";

export const HomeFlower = () => {
  return (
    <>
      <div className={styles["flower_card"]}>
        <Image
          className={styles["flower_card_1"]}
          width={200}
          height={200}
          src={Flower3}
          alt="Image"
        />
        <Image
          className={styles["flower_card_2"]}
          width={200}
          height={200}
          src={Flower2}
          alt="Image"
        />

        <Image
          className={styles["flower_card_3"]}
          width={379}
          height={318}
          src={Flower1}
          alt="Image"
        />
      </div>
    </>
  );
};
