
import axios from 'axios';

const obtenerDatosCriptos = async () => {
    try {
        const response = await axios.get("https://api.coinlore.net/api/tickers/")
        const cryptos = response.data.data;

        const bitcoin = cryptos.find(crypto => crypto.id === '90'); 

        // Simulamos datos históricos basados en el precio actual
        const historial = Array.from({ length: 7 }, (_, i) => ({
            fecha: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(), // Últimos 7 días
            precio: parseFloat(bitcoin.price_usd) + (Math.random() * 100 - 50), 
        })).reverse();


        return { cryptos, bitcoin, historial };

    } catch (error) {
        console.error("error al obtener los datos")
        return { cryptos: [], bitcoin: null, historial: [] };
    }
};

export default obtenerDatosCriptos;

