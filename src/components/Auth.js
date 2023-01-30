import React from 'react';
import '../style.scss';

function LogIn() {
    return <h1>Zaloguj się</h1>
}

function LogOut() {
    return <h1>Wyloguj się</h1>
}

export default function Auth(props) {
    if(props.login) {
        return <LogOut />
    } else {
        return <LogIn />
    }
}