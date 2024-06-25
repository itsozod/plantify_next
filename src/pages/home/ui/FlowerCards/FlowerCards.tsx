import { FlowerCardApi } from "@/src/entities/FlowerCard";
import { Flower } from "@/src/entities/FlowerCard/lib/types";

const FlowerCards = async () => {
  const data = await FlowerCardApi();
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
