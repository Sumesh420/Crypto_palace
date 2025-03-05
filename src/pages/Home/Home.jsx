import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/coinContext";
import { Link } from "react-router-dom";
function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
    if(e.target.value==""){
setDisplayCoin(allCoin);
    }
  };
  const searchHandler = async (e) => {
    e.preventDefault();
   const coins= await allCoin.filter((coin)=>(
      coin.name.toLowerCase().includes(input.toLowerCase())
    ))
    setDisplayCoin(coins);
  };
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br />
          Crypto Marketplace
        </h1>
        <p>
          Welcome to world's largest cryptocurrency marketplace. Sign up to
          explore more about crypto's
        </p>
        <form onSubmit={searchHandler}>
          <input
          list="coin-list"
            onChange={inputHandler}
            value={input}
            type="text"
            placeholder="Search crypto.."
            required
          />

<datalist id="coin-list">
  {allCoin?.map((coin,index)=>(
    <option key={index} value={coin.name}/>
  ))}
</datalist>


          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin?.slice(0, 10).map((coin, index) => (
          <Link to={`/coin/${coin.id}`} className="table-layout" key={index}>
            <p>{coin.market_cap_rank}</p>
            <div>
              <img src={coin.image} alt="" />
              <p>{coin.name + "-" + coin.symbol}</p>
            </div>
            <p>
              {currency.symbol} {coin.current_price}
            </p>
            <p
              className={coin.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {coin.price_change_percentage_24h.toFixed(2)}
            </p>
            <p className="market-cap">
              {currency.symbol} {coin.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
