import './index.css'
import { Body } from "./components/body"
import Layout from './assets/images/fondo.svg'

function App() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-[#00001A]">
      
      <div className="relative w-full h-full">
        
        {/* Fondo blanco igual que el Body */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Marco SVG ocupando TODA la pantalla */}
        <img
          src={Layout}
          alt="marco"
          className="absolute inset-0 w-full h-full object-fill z-10"
        />

        {/* Contenido */}
        <div className="absolute inset-0 flex items-center justify-center p-6 z-20">
          <Body />
        </div>

      </div>
    </main>
  )
}

export default App