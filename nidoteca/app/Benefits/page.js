import  Navbar  from '../components/Narvar'; 
import  Benefits  from '../components/Benefits'; 
export default function Beneficios() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Benefits />
      </main>
      
      <footer className="bg-gradient-to-r from-blue-900 to-green-800 text-white p-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="mb-2">Plataforma Comunitaria de Formalización Empresarial © 2025</p>
          <p className="text-sm opacity-80">
            Una iniciativa para el desarrollo económico de Zipaquirá
          </p>
        </div>
      </footer>
    </div>
  );
}