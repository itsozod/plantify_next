"use client";
import { FlowerCardApi } from "@/src/entities/FlowerCard";
import { useFlowerCard } from "@/src/entities/FlowerCard/api/api";
import { Flower } from "@/src/entities/FlowerCard/lib/types";

const FlowerCards = () => {
  // const data = await FlowerCardApi();
  const { data, error, isLoading } = useFlowerCard();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error ocurred</div>;
  return (
    <div>
      {data?.map((flower: Flower) => {
        return (
          <>
            <div>{flower?.title}</div>
          </>
        );
      })}
    </div>
  );
};

export default FlowerCards;
