export const getCoinsDetail = async (setDetail, id) => {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await response.json();
        setDetail(data)

    } catch (error) {
        console.error(error);
    }
}