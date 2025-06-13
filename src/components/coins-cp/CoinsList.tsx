interface ICoinList {
  allCoins: {
    image: string;
    name: string;
    current_price: number;
    id: string;
    symbol: string;
  }[];
}

function CoinList({ allCoins }: ICoinList) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center font-mono text-3xl mb-6 font-bold text-blue-800 animate-pulse">
        Top 100 coins
      </h1>
      <table className="w-full max-w-[800px] mx-auto rounded-lg">
        <tr>
          <th className="text-left p-2 text-xl">Icon</th>
          <th className="text-left text-xl">Name</th>
          <th className="text-left text-xl">Symbol</th>
          <th className="text-left text-xl">Price</th>
        </tr>
        <tbody>
          {allCoins.map((item) => {
            return (
              <tr className="border-b border-gray-300" key={item.id}>
                <td className="p-2">
                  <img className="w-14" src={item.image} alt={item.name} />
                </td>
                <td className="text-blue-700">{item.name}</td>
                <td className="text-amber-700 font-semibold">{item.symbol}</td>
                <td>${item.current_price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CoinList;
