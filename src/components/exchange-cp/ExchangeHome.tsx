"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ExchangeList from "./ExchangeList";

function ExchangeHome() {
  const [allExchanges, setAllExchanges] = useState<
    | {
        country: string;
        description: string;
        image: string;
        year_established: string;
        name: string;
        url: string;
        trust_score_rank: number;
        trust_score: number;
        id: string;
      }[]
    | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);
  // A function to get the exchange data
  const getExchangeData = async () => {
    try {
      // try sending request here
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/exchanges",

        {
          headers: {
            "x-cg-demo-api-key": process.env.NEXT_PUBLIC_CRYPTO_API_KEY,
          },
        }
      );
      //  update the allExchange state to the server response
      setAllExchanges(response.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getExchangeData();
  }, []);
  //   show a loader when sending api request
  if (loading === true) {
    return (
      <div className="grid place-items-center h-screen text-blue-800 animate-spin text-4xl">
        <h1>Loading exchange ....</h1>
      </div>
    );
  }
  //  show if the error occur and we couldn't get the data from the server
  if (allExchanges === null) {
    return (
      <div className="grid place-items-center h-screen text-red-500  animate-bounce text-4xl">
        <h1>Sorry failed to load data try again .....</h1>
      </div>
    );
  }
  return (
    <section className="container mx-auto py-10">
      <ExchangeList allExchanges={allExchanges} />
    </section>
  );
}

export default ExchangeHome;
