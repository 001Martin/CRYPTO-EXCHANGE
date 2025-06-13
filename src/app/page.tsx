function Home() {
  return (
    <div className="flex justify-center items-center py-20 px-4 flex-col">
      <h1 className="text-3xl lg: text-8xl font-bold font-mono">
        {" "}
        <span className="text-blue-800 animate-pulse">24/7</span> Luterking
        Crypto trade
      </h1>
      <p className="text-lg lg:text-2xl mt-4 text-gray-400 font-serif">
        Get access to all your favorite crypto currencies in one place
      </p>

      <div className="flex mt-4 gap-4">
        <p className="text-blue-800">Trending coins</p>
        <p className="text-green-700">Coins Prices</p>
        <p className="text-amber-700">Exchanges</p>
      </div>
      <img className="w-[800px] mt-4" src="/Crypto.png" alt="Hero image" />
    </div>
  );
}

export default Home;
