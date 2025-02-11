import { useQuery } from '@tanstack/react-query';  
import obtenerDatosCriptos from '../obtenerDatos';

const MostrarBitcoin = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['bitcoin'],  
        queryFn: obtenerDatosCriptos
    });

  if (isLoading) return <p>Cargando datos del Bitcoin...</p>;
  if (error) return <p>Error al obtener los datos del Bitcoin</p>;

  return (
    <div className="rounded-lg flex flex-wrap justify-center gap-6 m-auto w-full">
    {[
      { label: "Precio", value: `$${data.bitcoin.price_usd}` },
      { label: "24h Change", value: `${data.bitcoin.percent_change_24h}%` },
      { label: "1h Change", value: `${data.bitcoin.percent_change_1h}%` },
      { label: "7d Change", value: `${data.bitcoin.percent_change_7d}%` },
    ].map((item, index) => (
      <div key={index} className="bg-slate-800 p-10 rounded-lg shadow flex-1 min-w-[210px] text-center">
        <p className="text-gray-500 text-sm">{item.label}</p>
        <p className="text-3xl font-bold text-white">{item.value}</p>
      </div>
    ))}
  </div>

  );
};

export default MostrarBitcoin;
