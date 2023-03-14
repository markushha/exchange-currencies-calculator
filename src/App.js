import axios from "axios";
import { useQuery } from "react-query";
import CurrenciesTable from "./components/CurrenciesTable";
import Navbar from "./components/Navbar";
import { useState } from "react";
import BlueButton from "./components/BlueButton";

async function getCurrencies(skip) {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`
  );

  return data.coins;
}

function App() {
  const [skip, setSkip] = useState(0);
  const { data, isLoading, isError } = useQuery(
    ["coins", skip],
    () => getCurrencies(skip),
    { keepPreviousData: true }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error while getting data</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center w-fit">
          <CurrenciesTable data={data} />
          <div className="flex items-center justify-between w-full mt-4 ">
            <BlueButton
              title="Previous 10"
              onClick={() => {
                if (skip === 0) return alert('No more previous data');

                setSkip(skip - 10);
              }}
            />
            <BlueButton
              title="Next 10"
              onClick={() => {
                setSkip(skip + 10);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
