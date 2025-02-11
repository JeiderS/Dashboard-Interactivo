// ValorBtc.jsx
import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import UseBitcoinData from './useBitcoinData.jsx';
import GraficaBitcoin from '../GraficaBitcoin/GraficaBitcoin.jsx';



const ValorBtc = () => {

    const [hora, setHora] = useState('');
    
    const fechaFormateada = format(new Date(), 'dd MMM yyyy');
    const diaSemana = format(new Date(), 'EEEE');

    useEffect(() => {
        const intervalId = setInterval(() => {

          const horaFormateada = format(new Date(), 'HH:mm:ss');
            setHora(horaFormateada);  
        }, 1000);  
        return () => clearInterval(intervalId);
      }, []); 


    return (
        <div className='flex justify-center gap-5'>
            <div className="bg-slate-800 w-full sm:w-1/2 flex justify-center items-center p-10">
                <div className="bg-slate-700 p-5 flex flex-col items-center justify-center gap-5 w-full h-full">
                    <span>{diaSemana}</span>
                    <span>{fechaFormateada}</span>
                    <div>
                        <h3 className="text-7xl text-orange-500">{hora}</h3>
                    </div>
                    <UseBitcoinData />
                </div>
            </div>
            <GraficaBitcoin />
        </div>

    )
}

export default ValorBtc;