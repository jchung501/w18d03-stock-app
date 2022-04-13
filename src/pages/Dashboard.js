import React from "react";
import { Link } from "react-router-dom";
import stockData from "../stock-data"

export default function Dashboard (props) {
    const stocks = stockData.map((d, i) => {
        return <Link key={i} to={`/stocks/${d.symbol}`}>
            <li>{d.name}</li>
        </Link>
    });
    return <ul>{stockData}</ul>
}