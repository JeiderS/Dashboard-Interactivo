// useBitcoinData.js
import { useQuery } from '@tanstack/react-query';
import obtenerDatosCriptos from '../obtenerDatos';

const UseBitcoinData = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['bitcoin'],  
    queryFn: obtenerDatosCriptos,
  });

  if (isLoading) return <p>Cargando datos...</p>;
  if (error) return <p>Error al obtener los datos</p>;

    return (
        <div className='flex gap-2 '>
            <h2 className="text-xl font-bold">
                ${data.bitcoin.price_usd}  
            </h2>
            <h2 className="text-lg">({data.bitcoin.symbol})</h2>
      </div>
  );
};

export default UseBitcoinData;
