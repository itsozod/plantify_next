import React from "react";
import { Flower } from "../lib/types";
import Image from "next/image";

export const FlowerCardUi = ({ flower }: { flower: Flower }) => {
  return (
    <div key={flower?.id}>
      <Image
        width={250}
        height={250}
        src={flower?.img}
        alt={flower?.title}
      ></Image>
      <p>{flower?.title}</p>
    </div>
  );
};
