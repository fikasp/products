import React from "react";
import Header from './components/Header'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import "./style.scss";

export default function App() {
  return (
    <div>
      <Header welcome="Hello you!"/>
      
      <Welcome name="Przemek" greet="Witaj"/>
      <Welcome name="Mariusz" greet="Heyka"/>
      <Welcome name="Klaudia" greet=":)"/>

      <Counter start={10} step={1} />
      <Counter start={20} step={2} />
    </div>
  );
}
