import React from 'react';
import './style.css';
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
import { motion } from 'framer-motion';


const GridCoin = ({ coin }) => {
    const gridContainer = coin.market_cap_change_percentage_24h < 0 ? "grid-container" : "grid-container2";

    return (
        <motion.div
            className={gridContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className='logo-div'>
                <img src={coin.image} className='logo-img' />
                <div className='coin-info'>
                    <p className='symbol'>{coin.symbol.toUpperCase()}-USD</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
            </div>
            {coin.market_cap_change_percentage_24h < 0 ? (
                <>
                    <div className='price-percent'>
                        <motion.div
                            className='change_percent2'
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className='change-percent-price2'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</p>
                        </motion.div>
                        <HiTrendingDown className='trending-icon2' />
                    </div>
                    <motion.div
                        className='price-info'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className='price2'>${coin.current_price.toLocaleString()}</p>
                        <p className='name'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
                        <p className='name'>Market Cap: ${coin.market_cap.toLocaleString()}</p>
                    </motion.div>
                </>
            ) : (
                <>
                    <div className='price-percent'>
                        <motion.div
                            className='change_percent'
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className='change-percent-price'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</p>
                        </motion.div>
                        <HiTrendingUp className='trending-icon' />
                    </div>
                    <motion.div
                        className='price-info'
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className='price'>${coin.current_price.toLocaleString()}</p>
                        <p className='name'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
                        <p className='name'>Market Cap: ${coin.market_cap.toLocaleString()}</p>
                    </motion.div>
                </>
            )}
        </motion.div>
    )
}

export default GridCoin