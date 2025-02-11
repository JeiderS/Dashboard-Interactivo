// MostrarCriptos.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';  
import obtenerDatosCriptos from '../obtenerDatos';

const MostrarCriptos = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['criptomonedas'],  
        queryFn: obtenerDatosCriptos
    });

  if (isLoading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al obtener los datos</p>;

  return (
    <div className="mx-auto p-10 bg-slate-800 mt-5 ">
    <table className="min-w-full table-auto border-collapse rounded-lg shadow-lg ">
        <thead className="bg-gradient-to-r bg-slate-700   text-white">
            <tr>
                <th className="px-6 py-3 text-left">Coin</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">24h</th>
                <th className="px-6 py-3 text-left">1h</th>
                <th className="px-6 py-3 text-left">7d</th>
                <th className="px-6 py-3 text-left">Market Cap</th>
                <th className="px-6 py-3 text-left">24h Volume</th>
            </tr>
        </thead>
        <tbody>
            {data?.cryptos.map((cripto) => (
                <tr key={cripto.id} className="border-b hover:bg-slate-700 ">
                    <td className="px-4 py-2">{cripto.name} ({cripto.symbol})</td>
                    <td className="px-4 py-2">${cripto.price_usd}</td>
                    <td className={`px-4 py-2 ${cripto.percent_change_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {cripto.percent_change_24h}%
                    </td>
                    <td className={`px-4 py-2 ${cripto.percent_change_1h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {cripto.percent_change_1h}%
                    </td>
                    <td className={`px-4 py-2 ${cripto.percent_change_7d < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {cripto.percent_change_7d}%
                    </td>
                    <td className="px-4 py-2">${cripto.market_cap_usd}</td>
                    <td className="px-4 py-2">${cripto.volume24}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>


  );
};

export default MostrarCriptos;
