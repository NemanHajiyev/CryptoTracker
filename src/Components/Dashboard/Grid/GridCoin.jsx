import React from 'react';
import './style.css';
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const GridCoin = ({ coin }) => {
    const gridContainer = coin.market_cap_change_percentage_24h < 0 ? "grid-container" : "grid-container2";
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/coin/${coin.id.toLowerCase()}`)}

            className={gridContainer}>
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
                        <div className='change_percent2'>
                            <p className='change-percent-price2'>{(coin.market_cap_change_percentage_24h).toFixed(2)}%</p>
                        </div>
                        <HiTrendingDown className='trending-icon2' />
                    </div>
                    <div className='price-info'>
                        <p className='price2'>${coin.current_price.toLocaleString()}</p>
                        <p className='name'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
                        <p className='name'>Market Cap: ${coin.market_cap.toLocaleString()}</p>
                    </div>

                </>) : (
                <>
                    <div className='price-percent'>
                        <div className='change_percent'>
                            <p className='change-percent-price'>{(coin.market_cap_change_percentage_24h).toFixed(2)}%</p>
                        </div>
                        <HiTrendingUp className='trending-icon' />
                    </div>
                    <div className='price-info'>
                        <p className='price'>${coin.current_price.toLocaleString()}</p>
                        <p className='name'>Total Volume : ${coin.total_volume.toLocaleString()}</p>
                        <p className='name'>Market Cap: ${coin.market_cap.toLocaleString()}</p>
                    </div>
                </>
            )}

        </div>
    )
}

export default GridCoin