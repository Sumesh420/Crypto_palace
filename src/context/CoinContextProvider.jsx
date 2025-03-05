import React, { useEffect, useState } from "react";
import { CoinContext } from "./coinContext";

const CoinContextProvider = ({ children }) => {
    const [allCoin,setAllCoin]=useState(null);
    const [currency,setCurrency]=useState({
        name:"usd",
        symbol:"$",
    })
  
    useEffect(()=>{
        const fetchAllCoins=()=>{
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-EkYounzD7huWNqbW5DuwUTqp'}
              };
              
              fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
                .then(res => res.json())
                .then(res => setAllCoin(res))
                .catch(err => console.error(err));
        }
        fetchAllCoins();
    },[currency])
    return (
        <CoinContext.Provider value={{allCoin,currency,setCurrency}}>
            {children}
        </CoinContext.Provider>
    )
};
export default CoinContextProvider;
