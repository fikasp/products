import React from 'react';
import '../style.css';

export default function Welcome(props) {

  return (
    <div>
      <p>Welcome {props.name} :)</p>
    </div>
  );
}