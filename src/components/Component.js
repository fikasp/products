import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import '../style.scss';

export default function Component(props) {
    const [name, setName] = useState("default")

    const callback = (value) => (evt) => {
        console.log(evt.target)
        console.log(value)
    }

    useEffect( () => {
        console.log("start")
        setName (props.name)
        return () => {
            console.log("end")
        }
    },[name])

    return (
        <div>
            <div onClick={callback("value")}>{name}</div>
        </div>
    )
}