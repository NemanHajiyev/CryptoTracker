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
    const [selectChart, setSelectChart] = useState("prices");

    useEffect(() => {
        const fetchChartData = async () => {
            setIsLoading(true);

            try {
                const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`);
                const data = await res.json();

                const selectedData = data[selectChart] || [];
                const labels = selectedData.map(entry => new Date(entry[0]).toLocaleDateString());
                const values = selectedData.map(entry => entry[1]);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: `${coinName} Chart`,
                            data: values,
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
    }, [coinId, days, selectChart]);

    return (
        <div className="chart-container">
            <div className="selection-div">
                <select className="select" value={days} onChange={(e) => setDays(Number(e.target.value))}>
                    <option value="7">7 - Day</option>
                    <option value="30">30 - Day</option>
                    <option value="60">60 - Day</option>
                    <option value="90">90 - Day</option>
                </select>

                <select className="select" value={selectChart} onChange={(e) => setSelectChart(e.target.value)}>
                    <option value="prices">Price</option>
                    <option value="total_volumes">Total Volume</option>
                    <option value="market_caps">Market Cap</option>
                </select>
            </div>

            {isLoading ? <Loading /> : (
                <div>
                    <h2>{coinName} {selectChart.replace("_", " ")} Chart - (L ast {days} Days )</h2>
                    <Line data={chartData} />
                </div>
            )}
        </div>
    );
};

export default Chart;
