import React from "react";

function CurrenciesTable({ data }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <label className="text-xl font-semibold my-4">Currencies</label>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Symbol</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Rank</th>
          </tr>
        </thead>
        <tbody>
          {data.map((currency) => (
            <tr key={currency.id}>
              <td className="border px-4 py-2 flex">
              <img className="w-6 h-6 mx-2" alt={currency.name + ' icon'} src={currency.icon}/>{currency.name}
              </td>
              <td className="border px-4 py-2 text-center">{currency.symbol}</td>
              <td className="border px-4 py-2">$ {currency.price}</td>
              <td className="border px-4 py-2">{currency.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrenciesTable;
