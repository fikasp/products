import React from 'react';
import '../style.scss';

export default class Date extends React.Component {
  state = {
    date: new Date()
  }
  
  componentDidMount() {
    this.interval = setInterval( 
      () => {this.setState( {date: new Date() } ) }, 1000
    )
  }

  render() {
    return (
      <div>
        <p>{this.state.date}</p>
      </div>
    )
  }
}