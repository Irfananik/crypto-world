import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams()

    const [coin, setCoins] = useState({})

    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setCoins(data))
    }, [id])
    return (
        <div className="px-4 pt-20 pb-24 mx-auto max-w-7xl h-[60vh] md:px-2">
            <div className="grid grid-cols-1 gap-4 h-full content-center justify-items-center md:grid-cols-2">
                <div>
                    <h2 className="text-3xl">General Info:</h2>
                    <p className="text-lg">Name: {coin.name} </p>
                    <p className="text-lg">symbol: {coin.symbol} </p>
                    <p className="text-lg">Market Rank: {coin.market_cap_rank} </p>
                    <p className="text-lg">Origin: {coin.country_origin ? coin.country_origin : "Not available"} </p>
                    <p className="text-lg">Contact Address: {coin.address} </p>
                    <p className="text-lg">Current Priece: {coin.current_price} </p>
                    <p className="text-lg">Last Updated: {coin.last_updated} </p>

                    <h2 className="text-3xl">Score:</h2>
                    <p className="text-lg">Community Score: {coin.community_score} </p>
                    <p className="text-lg">Developer Score: {coin.developer_score} </p>
                </div>
                <div>
                    {
                        <img src={coin.image?.large} alt="coinImg" />
                    }
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;