import React from "react";
import Header from './components/Header'
import Welcome from './components/Welcome'
import "./style.css";

let przemek = "Przemek"
let mariusz = "Mariusz"


export default function App() {
  return (
    <div>
      <Header />
      <Welcome name={przemek} />
      <Welcome name={mariusz} />
    </div>
  );
}