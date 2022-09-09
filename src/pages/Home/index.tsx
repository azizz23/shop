import React, { useRef } from "react";
import Categories from "./sections/Categories";
import Welcome from "./sections/Welcome";

const Home = ({ products }: any) => {
  const categoriesSec = useRef();

  return (
    <main>
      <Welcome categoriesSec={categoriesSec} />
      <Categories products={products} categoriesSec={categoriesSec} />
    </main>
  );
};

export default Home;
