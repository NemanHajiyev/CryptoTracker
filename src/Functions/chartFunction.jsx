import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export const chartFunctions = async (coinId, coinName, selectChart, days, setIsLoading, setChartData) => {
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
