import React from 'react';
import '../style.scss';

export default class Header extends React.Component {
  state = {
    hello: "Hello world !"
  }

  render() {
    return (
      <div>
        <h1>{this.state.hello}</h1>
      </div>
    )
  }
}