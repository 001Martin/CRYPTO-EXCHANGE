"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import CoinList from "./CoinsList";

function CoinsHome() {
  const [allCoins, setAllCoins] = useState<
    | {
        id: string;
        name: string;
        current_price: number;
        image: string;
        symbol: string;
      }[]
    | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);
  // function to get coins data
  const getCoinsData = async () => {
    try {
      // try sending request here
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",

        {
          headers: {
            "x-cg-demo-api-key": process.env.NEXT_PUBLIC_CRYPTO_API_KEY,
          },
        }
      );
      //   update allCoins to the data from the api server
      setAllCoins(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCoinsData();
  }, []);

  if (loading === true) {
    return (
      <div>
        <h1 className="text-4xl text-blue-700 animate-pulse flex justify-center">
          Getting coins data........
        </h1>
      </div>
    );
  }

  if (allCoins === null) {
    return (
      <div className="flex justify-center items-center text-red-500 h-screen">
        <h1>Sorry anerror occured, try again later</h1>
      </div>
    );
  }
  return (
    <section>
      <CoinList allCoins={allCoins} />
    </section>
  );
}

export default CoinsHome;
