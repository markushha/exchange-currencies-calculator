import React from "react";

function CurrenciesTable({ data, skip }) {
  return (
    <div className="flex shadow-lg flex-col items-center justify-center">
      <label className="text-xl font-semibold my-4">Currencies Page: {skip / 10 + 1}</label>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-2xl font-semibold">Name</th>
            <th className="px-4 py-2 border text-2xl font-semibold">Symbol</th>
            <th className="px-4 py-2 border text-2xl font-semibold">Price</th>
            <th className="px-4 py-2 border text-2xl font-semibold">Rank</th>
          </tr>
        </thead>
        <tbody>
          {data.map((currency) => (
            <tr key={currency.id}>
              <td className="text-xl font-small border px-4 py-2 flex">
              <img className="w-6 h-6 mx-2" alt={currency.name + ' icon'} src={currency.icon}/>{currency.name}
              </td>
              <td className="text-xl font-small border px-4 py-2 text-center">{currency.symbol}</td>
              <td className="text-xl font-small border px-4 py-2">$ {currency.price}</td>
              <td className="text-xl font-small border px-4 py-2">{currency.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrenciesTable;
