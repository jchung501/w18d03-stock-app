import { Link } from "react-router-dom";
import stockData from "../stock-data"

export default function Stock (props) {
    return (
        <div className="stocks">
            {
                stockData.map((stock) => {
                    const { name, symbol, lastPrice, change, high, low, open } = stock;
                    return (<Link to={`/stocks/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>)
                })
            }
        </div>
    )
}

