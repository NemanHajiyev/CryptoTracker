import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Loading from "../Loader/Loading";
import '../Loader/style.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({ coinId, coinName }) => {
    const [chartData, setChartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(7);

    useEffect(() => {
        const fetchChartData = async () => {
            setIsLoading(true);

            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`);
                const data = await res.json();

                const prices = data.prices.map(price => price[1]);
                const labels = data.prices.map(price => new Date(price[0]).toLocaleDateString());

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: `${coinName} Price Chart`,
                            data: prices,
                            borderColor: "rgba(75,192,192,1)",
                            backgroundColor: "rgba(192, 75, 75, 0.2)",
                            borderWidth: 2,
                            pointRadius: 0,
                            tension: 0.1
                        }
                    ]
                });

            } catch (error) {
                console.error("Data fetch error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchChartData();
    }, [coinId, days]);

    return (
        <div className="chart-container">

            <select value={days} onChange={(e) => setDays(Number(e.target.value))}>
                <option value="7">7 Days</option>
                <option value="30">30 Days</option>
                <option value="60">60 Days</option>
                <option value="90">90 Days</option>
            </select>
            {isLoading ? <Loading /> : (
                <div>
                    <h2>{coinName} Price Chart - (Last {days} Days)</h2>
                    <Line data={chartData} />
                </div>
            )}
        </div>
    );
};

export default Chart;
