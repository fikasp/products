import React from 'react';
import '../style.scss';

export default class Header extends React.Component {
  state = {
    hello: "Hello world !"
  }

  change = (evt) => {
    let hello = evt.target.value
    if (hello) {
      this.setState({hello: hello})
    } else {
      this.setState({hello: this.props.welcome})
    }
  }

  componentDidMount() {
    this.setState({hello: this.props.welcome})
  }

  render() {
    return (
      <div>
        <h1>{this.state.hello}</h1>
        <input type="text" onChange={this.change} placeholder="Enter text"/>
      </div>
    )
  }
}