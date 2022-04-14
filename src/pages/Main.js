import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import Stock from './Stock';
import stockData from "../stock-data"

export default function Main(props) {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/stocks/:symbol" element={<Stock stockData={stockData} {...props} />}/>
                <Route path="/stocks" element={<Dashboard {...props} stockdata={stockData}/>}/>
            </Routes>
        </main>
    )
}