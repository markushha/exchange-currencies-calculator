import axios from "axios";
import { useQuery } from "react-query";
import CurrenciesTable from "../components/CurrenciesTable";
import Navbar from "../components/Navbar";
import { useState } from "react";
import BlueButton from "../components/BlueButton";

async function getCurrencies(skip) {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`
  );

  return data.coins;
}

export default function Currencies() {
  const [skip, setSkip] = useState(0);
  const { data, isLoading, isError } = useQuery(
    ["coins", skip],
    () => getCurrencies(skip),
    { keepPreviousData: true }
  );

  if (isLoading) return <div className="flex items-center h-[100vh] text-center justify-center"><p className="text-4xl font-bold text-black hover:text-gray-600">Loading...</p></div>;
  if (isError) return <div className="flex items-center h-[100vh] text-center justify-center"><p className="text-4xl font-bold text-black hover:text-gray-600">Error while getting data</p></div>;
  if (!data) return <div className="flex items-center h-[100vh] text-center justify-center cursor-pointer"><p className="text-4xl font-bold text-black hover:text-gray-600">No data</p></div>;

  return (
    <div className="wrapper">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="flex flex-col items-center justify-center w-fit mb-8">
          <CurrenciesTable data={data} skip={skip}/>
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
 