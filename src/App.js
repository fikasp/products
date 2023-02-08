import React from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { createContext } from 'react'
import "./style.scss";

const context = createContext()
const Provider = context.Provider
export const Consumer = context.Consumer

export default function App() {

  return (
    <div>
      <Provider value={{klucz: "Total: "}}>
        <Header />
        <ProductsList />
      </Provider>
    </div>
  );
}
