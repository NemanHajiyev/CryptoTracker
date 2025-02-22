import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import Loading from '../Loader/Loading';
import CoinInfo from './CoinInfo';
import { getCoinsDetail } from '../../Functions/getCoinsDetail';
import Chart from '../LineChart/Chart';

const Coins = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await getCoinsDetail(setDetail, id);
            setTimeout(() => setIsLoading(false), 1000);
        };
        fetchData();
    }, [id]);

    return (
        <div className='coin-comp'>
            {isLoading ? <Loading /> : (
                <>
                    <div className='detail-container'>
                        {detail ? (
                            <div className='detail-coin'>
                                <p><img src={detail.image.small} alt={detail.name} /></p>
                                <p>{detail.name}</p>
                                <p>${detail.market_data.current_price.usd}</p>
                                <p>${detail.market_data.market_cap.usd}</p>
                                <p>${detail.market_data.total_volume.usd}</p>
                                <p className={`coin-change ${detail.market_data.market_cap_change_percentage_24h < 0 ? 'negative' : 'positive'}`}>
                                    {detail.market_data.market_cap_change_percentage_24h}%
                                </p>
                            </div>
                        ) : null}
                    </div>
                    <div className='chart-div'>
                        <Chart coinId={id} coinName={detail?.name} />
                    </div>
                    <div>
                        <CoinInfo desc={detail?.description.en} head={detail?.name} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Coins;
