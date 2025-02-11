
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import obtenerDatosCriptos from '../obtenerDatos.jsx';

// Registramos los elementos necesarios para Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraficaBitcoin = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['criptomonedas'],
        queryFn: obtenerDatosCriptos
    });

    if (isLoading) return <p>Cargando gráfico...</p>;
    if (error || !data.bitcoin) return <p>Error al obtener los datos del Bitcoin</p>;

    // Datos para la gráfica
    const chartData = {
        labels: data.historial.map(item => item.fecha), 
        datasets: [
            {
                label: 'Precio de Bitcoin (USD)',
                data: data.historial.map(item => item.precio), 
                borderColor: '#F7931A',
                backgroundColor: 'rgba(247, 147, 26, 0.2)',
                fill: true,
                tension: 0.4, 
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                color: 'white',
                position: 'top' 
            },
            title: {
                color: 'white',
                display: true,
                text: 'Precio de Bitcoin (Últimos 7 días)',
            },
        },
        scales: {
            y: {
                position: 'right',  
                ticks: {
                    color: 'white',
                    callback: function(value) {
                        return `$${value}`; 
                    }
                },
                grid: {
                    color: '#4b4b4b',  
                }
            },
            x: {
                ticks: {
                    color: 'white',
                    autoSkip: true,
                    maxTicksLimit: 7,  
                },
                grid: {
                    color: '#4b4b4b',  
                }
            }
        },
       
        };

    return (
        <div className='bg-slate-800 w-full sm:w-1/2 flex justify-center items-center  '>
            <Line className='w-[100%] ' data={chartData} options={options}/>
        </div>
    );
};

export default GraficaBitcoin;
