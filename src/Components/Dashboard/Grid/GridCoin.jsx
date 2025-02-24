import React from 'react';
import './style.css';
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const GridCoin = ({ coin }) => {
    const gridContainer = coin.market_cap_change_percentage_24h < 0 ? "grid-container" : "grid-container2";
    const navigate = useNavigate()

    return (
        <motion.div
            onClick={() => navigate(`/coin/${coin.id.toLowerCase()}`)}
            className={gridContainer}
            initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
            <div className='logo-div'>
                <motion.img
                    src={coin.image}
                    className='logo-img'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.div
                    className='coin-info'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className='symbol'>{coin.symbol.toUpperCase()}-USD</p>
                    <p className='coin-name'>{coin.name}</p>
                </motion.div>
            </div>

            {coin.market_cap_change_percentage_24h < 0 ? (
                <>
                    <motion.div
                        className='price-percent'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        <motion.div
                            className='change_percent2'
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className='change-percent-price2'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</p>
                        </motion.div>
                        <HiTrendingDown className='trending-icon2' />
                    </motion.div>

                    <motion.div
                        className='price-info'
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className='price2'>${coin.current_price.toLocaleString()}</p>
                        <p className='name'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
                        <p className='name'>Market Cap: ${coin.market_cap.toLocaleString()}</p>
                    </motion.div>
                </>
            ) : (
                <>
                    <motion.div
                        className='price-percent'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        <motion.div
                            className='change_percent'
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className='change-percent-price'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</p>
                        </motion.div>
                        <HiTrendingUp className='trending-icon' />
                    </motion.div>

                    <motion.div
                        className='price-info'
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
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