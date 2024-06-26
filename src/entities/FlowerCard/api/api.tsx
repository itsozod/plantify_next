// export const FlowerCardApi = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/plants");
//     const data = await res?.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((r) => r.json());
export const useFlowerCard = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:5000/plants",
    fetcher
  );
  return { data, error, isLoading };
};
