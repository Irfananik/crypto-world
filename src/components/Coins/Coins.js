import React, { useEffect, useState } from 'react';

const Coins = () => {
    const [coins,setCoins] = useState()

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(response => response.json())
        .then(data => setCoins(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl text-center font-sans font-bold mt-6">Crypto World Coins</h2>
            <p className="text-xl text-center font-sans">Total Coins: {coins?.length}</p>
        </div>
    );
};

export default Coins;