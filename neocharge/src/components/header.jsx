import Logo from '../assets/images/cargador.svg';


export function Header() {

  return (
    <>
    <div className=' bg-Fondo-50 p-4'>
   
    <div className='flex items-center'>
      <img src={Logo} alt="cargador" className='w-12 h-12 mr-4'/> 
      <h1 className='text-2xl font-bold text-Fondo-900'>CARGADOR AUTOMATICO</h1>  
    </div>
   
    </div>
    </>
  )
}


