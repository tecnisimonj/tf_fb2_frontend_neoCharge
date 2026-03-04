import { useState, useEffect } from 'react';

export function ActivityList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data for the list
  const sampleItems = [
    'Item 1: Proceso de carga iniciado',
    'Item 2: Verificación de voltaje',
    'Item 3: Control de temperatura',
    'Item 4: Monitorización de corriente',
    'Item 5: Sistema de seguridad activo',
    'Item 6: Comunicación establecida',
    'Item 7: Actualización de firmware',
    'Item 8: Diagnóstico completado',
    'Item 9: Reporte generado',
    'Item 10: Proceso finalizado'
  ];

  // Auto-advance items every 10 seconds when playing
  useEffect(() => {
    let interval = null;
    if (window.isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= sampleItems.length ? 0 : nextIndex;
        });
      }, 10000); // 10 seconds
    } else {
      setCurrentIndex(0); // Reset when stopped
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [sampleItems.length]);

  return (
    <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Registro de Actividades</h2>
      
      <div className='bg-gray-50 rounded-md border border-gray-200 overflow-hidden'>
        <div className='max-h-96 overflow-y-auto'>
          {sampleItems.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-4 border-b border-gray-100 transition-all duration-300 ${
                index <= currentIndex 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-4'
              } ${
                index === currentIndex 
                  ? 'bg-blue-50 border-blue-200' 
                  : 'hover:bg-gray-100'
              } last:border-b-0`}
            >
              <span className='text-base text-gray-800'>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}