import React from 'react'
import './Stocks.css'

export default function Stocks({ stocks, loading }) {
    return (
        <div>
            <div className="dataItem header">
                <p className="stockName">Stock Name</p>
                <p className="stockSymbol">Symbol </p>
                <p className="stockPrice">Price </p>
                <p className="stockPrice">Market Cap</p>
            </div>
            {stocks.map(stock => (
                <div className="dataItem" key={stock.id}>
                    <p className="stockName">{stock.stock_name} </p>
                    <p className="stockSymbol">{stock.stock_symbol} </p>
                    <p className="stockPrice">{stock.price} </p>
                    <p className="stockPrice">{stock.market_cap} </p>
                </div>
            ))}
        </div>
    )
}
