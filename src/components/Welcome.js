import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import '../style.scss';

export default function Welcome(props) {
  const [greet, setGreet] = useState()
  const [name, setName] = useState()

  const changeGreet = () => {
    setGreet("Okeyka")
  }

  const changeName = (evt) => {
    const name = evt.target.value
    if (name) {
      setName(name)
    } else {
      setName(props.name)
    }
  }

  useEffect(() => {
    console.log("start")
    setGreet(props.greet)
    setName(props.name)
  },[])

  return (
    <div>
      <p onClick={changeGreet}>{greet} {name} :)</p>
      <input onChange={changeName} type="text"/>
    </div>
  );
}