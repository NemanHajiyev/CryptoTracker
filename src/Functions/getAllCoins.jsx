export const getAllCoins = async (setCoins) => {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        const data = await response.json();
        setCoins(data)

    } catch (error) {
        console.error(error);
    }
}