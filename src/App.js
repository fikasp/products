import React from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

import "./style.scss";

export default function App() {
  return (
    <div>
      <Header />
      <ProductsList />
    </div>
  );
}
