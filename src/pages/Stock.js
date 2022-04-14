import React from 'react';
import { useParams } from 'react-router';

export default function Stock (props) {
    const params = useParams();
    const symbol = params.symbol

    const stock = props.stockData.filter((d => d.symbol === symbol))

  return (
    <div>
      <h1>Name: {stock[0].name}</h1>
      <h1>Price: {stock[0].lastPrice}</h1>
    </div>
  )
}

