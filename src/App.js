import React from "react";
import Header from './components/Header'
import Welcome from './components/Welcome'
import "./style.scss";

let przemek = "Przemek"
let mariusz = "Mariusz"


export default function App() {
  return (
    <div>
      <Header welcome="Hello!"/>
      <Welcome name={przemek} />
      <Welcome name={mariusz} />
      <Date />
    </div>
  );
}
