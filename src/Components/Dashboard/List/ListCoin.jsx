import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


const ListCoin = ({ coins }) => {
    const navigate = useNavigate()

    return (
        <motion.div
            className="coin-list"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <table>
                <tbody>
                    {coins.map((coin, index) => (
                        <motion.tr
                            key={coin.id}
                            onClick={() => navigate(`/coin/${coin.id.toLowerCase()}`)}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
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
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    )
}

export default ListCoin