import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Loading from "../Loader/Loading";
import '../Loader/style.css'
import { chartFunctions } from "../../Functions/chartFunction";


const Chart = ({ coinId, coinName }) => {
    const [chartData, setChartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(7);
    const [selectChart, setSelectChart] = useState("prices");

    useEffect(() => {
        chartFunctions(coinId, coinName, selectChart, days, setIsLoading, setChartData)
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
                    <h2>{coinName} {selectChart.replace("_", " ")} Chart - ( Last {days} Days )</h2>
                    <Line data={chartData} />
                </div>
            )}
        </div>
    );
};

export default Chart;
