
import { useState } from 'react';
import PlayIcon from '../assets/images/play.svg';
import StopIcon from '../assets/images/stop.svg';
import { ActivityList } from './activityList';

export function Body() {
  const [pedido, setPedido] = useState('');
  const [lote, setLote] = useState('');
  const [date, setDate] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  // Make isPlaying available globally for ActivityList
  window.isPlaying = isPlaying;

  return (
    <div className='container mx-auto p-6 bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        
        {/* First Column: Inputs and Datepicker */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Cargar</h2>
          
          {/* Pedido Input */}
          <div className='mb-6'>
            <label htmlFor='pedido' className='block text-base font-medium text-gray-700 mb-3'>
              Pedido
            </label>
            <input
              id='pedido'
              type='text'
              value={pedido}
              onChange={(e) => setPedido(e.target.value)}
              placeholder='Ingrese número de pedido'
              className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-base'
            />
          </div>

          {/* Lote Input */}
          <div className='mb-6'>
            <label htmlFor='lote' className='block text-base font-medium text-gray-700 mb-3'>
              Lote
            </label>
            <input
              id='lote'
              type='text'
              value={lote}
              onChange={(e) => setLote(e.target.value)}
              placeholder='Ingrese número de lote'
              className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-base'
            />
          </div>

          {/* Datepicker */}
          <div className='mb-6'>
            <label htmlFor='date' className='block text-base font-medium text-gray-700 mb-3'>
              Fecha
            </label>
            <input
              id='date'
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-base'
            />
          </div>

          {/* Play/Pause Button */}
          <div className='flex justify-end'>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`p-4 rounded-lg transition-all duration-200 ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-red-200' 
                  : 'bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-200'
              }`}
            >
              {isPlaying ? (
                <img src={StopIcon} alt="Stop" className='w-8 h-8' />
              ) : (
                <img src={PlayIcon} alt="Play" className='w-8 h-8' />
              )}
            </button>
          </div>
        </div>

        {/* Second Column: Activity List */}
        <ActivityList />
      </div>
    </div>
  );
}

