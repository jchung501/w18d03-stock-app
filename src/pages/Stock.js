import React from 'react';
import stockData from '../stock-data'

export default function Stock (props) {
  return (
    <div>
      <h3>Name: {stockData.name}</h3>
      <h3 className="price">Price: {stockData.lastPrice}</h3>
    </div>
  )
}

