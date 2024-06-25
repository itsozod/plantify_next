export const FlowerCardApi = async () => {
  try {
    const res = await fetch("http://localhost:5000/plants");
    const data = await res?.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
