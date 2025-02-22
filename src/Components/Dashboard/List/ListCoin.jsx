import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const ListCoin = ({ coins }) => {
    const navigate = useNavigate()

    return (
        <div
            className="coin-list">
            <table>
                <tbody>
                    {coins.map(coin => (
                        <tr
                            onClick={() => navigate(`/coin/${coin.id.toLowerCase()}`)}
                            key={coin.id}>
                            <td className="coin-logo">
                                <img src={coin.image} alt={coin.name} />
                            </td>
                            <td className="coin-name">{coin.name} ({coin.symbol.toUpperCase()})</td>
                            <td className="coin-price">${coin.current_price.toLocaleString()}</td>
                            <td className="coin-cap">${coin.market_cap.toLocaleString()}</td>
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