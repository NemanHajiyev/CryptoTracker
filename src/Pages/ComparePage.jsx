import React, { useState, useEffect } from 'react';
import { getAllCoins } from '../Functions/getAllCoins';
import Loading from '../Components/Loader/Loading';
import '../Components/Loader/style.css'
//
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
//
import { motion } from "framer-motion";

const CompareComponent = () => {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [coinOne, setCoinOne] = useState("bitcoin");
    const [coinTwo, setCoinTwo] = useState("ethereum");

    const [days, setDays] = useState(30);
    const [metric, setMetric] = useState("total_volumes");

    const [coinOneData, setCoinOneData] = useState(null);
    const [coinTwoData, setCoinTwoData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            await getAllCoins(setCoins);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchCoinData = async (coinId, setCoinData) => {
            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`);
                const data = await res.json();
                setCoinData(data);
            } catch (error) {
                console.error("API error:", error);
            }
        };

        fetchCoinData(coinOne, setCoinOneData);
        fetchCoinData(coinTwo, setCoinTwoData);
    }, [coinOne, coinTwo, days]);

    const chartData = {
        labels: coinOneData?.[metric]?.map(price => new Date(price[0]).toLocaleDateString()) || [],
        datasets: [
            {
                label: `${coinOne} ${metric.replace("_", " ")}`,
                data: coinOneData?.[metric]?.map(price => price[1]) || [],
                borderColor: "rgba(75,192,192,1)",
                backgroundColor: "rgba(192, 75, 75, 0.2)",
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.1
            },
            {
                label: `${coinTwo} ${metric.replace("_", " ")}`,
                data: coinTwoData?.[metric]?.map(price => price[1]) || [],
                borderColor: "rgba(192,75,192,1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.1
            }
        ]
    };

    return (

        <motion.div
            className="compare-container"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {isLoading ? <Loading /> : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        style={{ textAlign: "center", color: "var(--blue)" }}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ textShadow: "0px 0px 10px rgba(0, 174, 255, 0.8)" }}
                    >
                        Compare Cryptos
                    </motion.h1>

                    <motion.div
                        className="selection-div"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <select className="select" value={coinOne} onChange={(e) => setCoinOne(e.target.value)}>
                            {coins.map((coin) => (
                                <option key={coin.id} value={coin.id}>{coin.name}</option>
                            ))}
                        </select>
                        <select className="select" value={coinTwo} onChange={(e) => setCoinTwo(e.target.value)}>
                            {coins.map((coin) => (
                                <option key={coin.id} value={coin.id}>{coin.name}</option>
                            ))}
                        </select>
                    </motion.div>

                    <motion.div
                        className="selection-div"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <select className="select" value={days} onChange={(e) => setDays(Number(e.target.value))}>
                            <option value="7">7 Day</option>
                            <option value="30">30 Day</option>
                            <option value="60">60 Day</option>
                            <option value="90">90 Day</option>
                        </select>

                        <select className="select" value={metric} onChange={(e) => setMetric(e.target.value)}>
                            <option value="prices">Price</option>
                            <option value="market_caps">Market Cap</option>
                            <option value="total_volumes">Total Volume</option>
                        </select>
                    </motion.div>

                    {coinOneData && coinTwoData ? (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
                        >
                            <Line data={chartData} />
                        </motion.div>
                    ) : (
                        <Loading />
                    )}
                </motion.div>
            )}
        </motion.div>

    );
};

export default CompareComponent;
