interface IExchangeList {
  allExchanges: {
    country: string;
    description: string;
    year_established: string;
    name: string;
    image: string;
    url: string;
    trust_score_rank: number;
    trust_score: number;
    id: string;
  }[];
}

function ExchangeList({ allExchanges }: IExchangeList) {
  return (
    <section className="container mx-auto py-10 px-4">
      <h1 className="text-center font-mono text-3xl text-amber-300 animate-pulse">
        Top exchanges
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allExchanges.map((item) => {
          return (
            <div className="shadow p-4 rounded-md" key={item.id}>
              <h2 className="border border-gray-100 p-2 rounded-md text-3xl font-bold font-mono">
                {item.trust_score_rank}
              </h2>
              <img src={item.image} alt="item.name" />
              <h3 className="font-mono text-2xl font-bold">{item.name}</h3>
              <p className="text-amber-800">
                Establish: {item.year_established}
              </p>
              <p>Location: {item.country}</p>
              <p className="text-gray-500">
                {" "}
                Trust Score: ⭐{item.trust_score}
              </p>
              <p>
                <a
                  className="text-blue-700 underline underline-offset-4 hover:text-red-800"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  visit site
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ExchangeList;
