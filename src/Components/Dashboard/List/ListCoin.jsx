import React from 'react';
import './style.css';
const ListCoin = ({ coins }) => {
    return (
        <div className="coin-list">
            <table>
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>Total Volume</th>
                        <th>24h Change</th>
                    </tr>
                </thead>
                <tbody >
                    {coins.slice(0, 10).map(coin => (
                        <tr key={coin.id} >
                            <td className="coin-logo">
                                <img src={coin.image} alt={coin.name} />
                            </td>
                            <td className="coin-name">{coin.name} ({coin.symbol.toUpperCase()})</td>
                            <td className={`coin-change ${coin.market_cap_change_percentage_24h < 0 ? 'negative' : 'positive'}`}>${coin.current_price.toLocaleString()}</td>
                            <td className="coin-cap" >${coin.market_cap.toLocaleString()}</td>
                            <td className="coin-volume">${coin.total_volume.toLocaleString()}</td>
                            <td className={`coin-change ${coin.market_cap_change_percentage_24h < 0 ? 'negative' : 'positive'}`}>
                                {(coin.market_cap_change_percentage_24h).toFixed(2)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default ListCoin