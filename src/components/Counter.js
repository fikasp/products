import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import '../style.scss';

export default function Date(prop) {

  let [number, setNumber] = useState(prop.start)
  
  setInterval( () => {
    setNumber(number += prop.step) 
  }, 1000 )

  return (
    <div>
      <p>{number}</p>
    </div>
  )
}