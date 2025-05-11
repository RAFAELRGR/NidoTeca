"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import  Navbar  from './components/Narvar'; 


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      {/* Header con imagen y título */}
      <header className="w-full h-64 md:h-80 relative">
        <Image 
          src="/LogoNidoTeco.png" 
          alt="Zipaquirá" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-80"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-900/70 to-green-800/70">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
              Plataforma de Formalización Empresarial <span className="block text-xl mt-2 font-normal">Zipaquirá un Lugar Mejor</span>
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Sección principal */}
      <section className="p-6 md:p-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Facilitamos el crecimiento empresarial en <span className="text-green-700">Zipaquirá</span>
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Somos una iniciativa que brinda información clara, 
            herramientas prácticas y conexión directa con las entidades competentes para 
            formalizar tu negocio de manera sencilla y accesible.
          </p>

          {/* Sección Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border-t-4 border-blue-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-blue-900 p-4">
                <h3 className="text-xl font-bold text-white">Misión</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  Facilitar el acceso a información clara y concisa sobre los procesos de formalización empresarial en Zipaquirá, 
                  empoderando a emprendedores locales para iniciar y hacer crecer sus negocios legalmente.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-green-600 rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border-t-4 border-green-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-green-700 p-4">
                <h3 className="text-xl font-bold text-white">Visión</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  Ser la plataforma de referencia en Zipaquirá para la divulgación de información sobre formalización empresarial, 
                  contribuyendo al desarrollo económico local y a la generación de empleo digno.
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-blue-900 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Impacto Comunitario</h3>
              <p className="text-gray-700">
                Más de 50 emprendedores asesorados y 10 empresas formalizadas en nuestro primer año, 
                fortaleciendo la economía local.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Acompañamiento Integral</h3>
              <p className="text-gray-700">
                Asesoría personalizada y contenidos validados por expertos en emprendimiento y formalización.
              </p>
            </div>
            <div className="bg-white border-l-4 border-gray-300 p-6 rounded-r-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Acceso</h3>
              <p className="text-gray-700">
                Todos nuestros servicios son accesibles porque creemos en el poder transformador de los negocios legales.
              </p>
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Nuestros Aliados Estratégicos</h2>
          <p className="text-center max-w-3xl mx-auto mb-10 text-gray-700">
            Trabajamos en conjunto con instituciones comprometidas con el desarrollo empresarial de Zipaquirá:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-gray-100 w-32 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">
              <div className="bg-gray-100 w-32 h-32 rounded-lg flex items-center justify-center overflow-hidden">
              <Image 
                src="/Estacion47.jpg" 
                alt="Estacion 47"
                width={128}
                height={128} 
                className="object-contain p-2" 
              />
              </div>
              </span>
            </div>
            <div className="bg-gray-100 w-32 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">
              <Image 
                src="/Udec.png" 
                alt="UdeC"
                width={100} 
                height={100}
                className="object-contain p-2" 
              />
              </span>
            </div>
            <div className="bg-gray-100 w-32 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">
              <Image 
                src="/divergencias.jpg" 
                alt="Divergencias"
                width={128} 
                height={128}
                className="object-contain p-2" 
              />
              </span>
            </div>
            <div className="bg-gray-100 w-32 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">
              <Image 
                src="/Juventudes.jpg" 
                alt="Juventudes"
                width={128} 
                height={128}
                className="object-contain p-2" 
              />
              </span>
            </div>
          </div>

          <div className="mt-10 bg-blue-900/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">Alianzas que generan impacto</h3>
            <p className="mb-4 text-gray-700">
              Contamos con el apoyo de la <strong>Cámara de Comercio de Bogotá (sede Zipaquirá)</strong>, 
              la <strong>Universidad de Cundinamarca</strong> y diversas ONGs especializadas en emprendimiento, 
              quienes validan y actualizan nuestros contenidos periódicamente.
            </p>
            <p className="text-gray-700">
              Además, colaboramos con colectivos juveniles como <strong>Conexión Parce</strong>, 
              <strong> Divergencia Zipa</strong>, <strong>Zipa sin Etiquetas</strong> y <strong>Zipa es más que Sal </strong> 
              para difundir esta iniciativa en toda la comunidad.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12 space-y-6">
          <h3 className="text-2xl font-bold text-green-700">¿Listo para formalizar tu negocio?</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Accede a nuestra guía completa de pasos, requisitos y beneficios de la formalización empresarial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a 
              href="#" 
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium shadow-md hover:shadow-lg"
            >
              Descargar Guía Gratis
            </a>
            <a 
              href="http://localhost:3000/PricingPlans" 
              className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium shadow-md hover:shadow-lg"
            >
              Contactar Asesor
            </a>
          </div>
        </div>
      </section>

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