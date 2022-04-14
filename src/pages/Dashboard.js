import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard (props) {
    const stockData = props.stockData.map((d, i) => {
        return <Link key={i} to={`/stocks/${d.symbol}`}>
            <li>{d.name}</li>
        </Link>
    });
    return <ul>{stockData}</ul>
}