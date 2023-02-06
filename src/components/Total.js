import React from 'react';
import { formatNumber as format } from './Tools' 

export default function Total({total}) {
  return (
    <div className="total">
      Total: <span>{format(total)}</span> $
    </div>
  )
}
