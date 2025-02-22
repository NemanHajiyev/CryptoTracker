import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import Loading from '../Loader/Loading';
import CoinInfo from './CoinInfo';

const Coins = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState()
    const [isLoading, setIsLoading] = useState(true);
    console.log(detail)

    const getData = async () => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
            const data = await response.json();
            setDetail(data)
        } catch (error) {
            console.error(error);
        } finally {
            setTimeout(() => setIsLoading(false), 1000);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await getData();
        }
        fetchData()
    }, [id]);

    return (
        <div className='coin-comp'>
            {isLoading ? (<Loading />) : (
                <div className='detail-container'>
                    {detail ? (
                        <div className='detail-coin'>
                            <>
                                <p>
                                    <img src={detail.image.small} />
                                </p>
                            </>
                            <>
                                <p >{detail.name}</p>
                                <p>${detail.market_data.current_price.usd}</p>
                            </>
                            <>
                                <p >${detail.market_data.market_cap.usd}</p>
                                <p >${detail.market_data.total_volume.usd}</p>
                            </>
                            <p className={`coin-change ${detail.market_data.market_cap_change_percentage_24h < 0 ? 'negative' : 'positive'}`}>
                                {(detail.market_data.market_cap_change_percentage_24h)}%
                            </p>
                        </div>
                    ) : (null)}
                </div>
            )}

            {isLoading ? <Loading /> : (
                <>
                    <CoinInfo desc={detail.description.en} head={detail.name} />
                </>
            )}

        </div>
    )
}

export default Coins