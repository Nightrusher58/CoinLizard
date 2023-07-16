import React from "react";
import useParams from "react-router-dom";
import list from "../Data/data";
import { useState, useEffect } from "react";

const CoinDetail = () => {
  const params = useParams();
  const [coinInfo, setCoinInfo] = useState(null);

  useEffect(() => {
    const showCoinInfo = async () => {
      try {
        const response = await list;
        const arrayOfCoins = response.data.coins;
        setCoinInfo(arrayOfCoins);
      } catch (error) {
        console.log(error);
      }
    };
    showCoinInfo();
  }, []);

  return (
    <div>
      {coinInfo ? (
        coinInfo.map((coin) => {
          if (coin.uuid === params) {
            return <h3>{coin.name}</h3>;
          }
        })
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default CoinDetail;
