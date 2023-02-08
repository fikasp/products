import React from 'react';
import { formatNumber as format } from './Tools' 
import { Consumer } from '../App'

export default function Total({total}) {
  return (
    <div className="total">
      <Consumer>
        {({klucz}) => (<div>{klucz}</div>)}
      </Consumer>
      <span>{format(total)}</span> $
      
    </div>
  )
}






