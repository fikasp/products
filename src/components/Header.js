import React from 'react';
import '../style.css';

export default class Header extends React.Component {
  state = {
    hello: "Hello !"
  }

  render() {
    return (
      <div>
        <h1>{this.state.hello}</h1>
      </div>
    )
  }
}