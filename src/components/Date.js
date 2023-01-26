import React from 'react';
import '../style.scss';

export default class Date extends React.Component {
  state = {
    date: 0
  }
  
  componentDidMount() {
    this.interval = setInterval( () => {
      this.setState( {date: this.state.date +=0.5 } ) 
    }, 1000 )
  }

  render() {
    return (
      <div>
        <p>{this.state.date}</p>
      </div>
    )
  }
}