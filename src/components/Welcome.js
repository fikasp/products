import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import '../style.scss';

export default function Welcome(props) {
  const [greet, setGreet] = useState("Welcome you")

  const changeGreet = () => {
    setGreet("Okeyka")
  }

  return (
    <div>
      <p onClick={changeGreet}>{greet} {props.name} :)</p>
    </div>
  );
}