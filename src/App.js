import React from "react";
import Header from './components/Header'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Auth from "./components/Auth";
import "./style.scss";

export default function App() {
  return (
    <div className="container">
      <Header welcome="Hello you!"/>
      
      <Welcome name="Przemek" greet="Witaj"/>
      <Welcome name="Mariusz" greet="Heyka"/>
      <Welcome name="Klaudia" greet=":)"/>

      <Auth login={false} />
      <Counter />
    </div>
  );
}
