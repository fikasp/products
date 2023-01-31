import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import '../style.scss';

export default function Counter(prop) {

  let [number, setNumber] = useState(prop.start)
  let numbers = [1,2,3, 4,5]

  const click = (number) => (evt) => {
    console.log(evt.target)
    console.log(number)
  }

  setInterval( () => {
    setNumber(number += prop.step) 
  }, 1000 )

  return (
    <div>
      <br></br>
      {numbers.map((number, index) => <p key={index} onClick={click(number)}>{number}</p>)}
    </div>
  )
}