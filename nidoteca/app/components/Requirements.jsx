"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function BusinessStages() {
  const [activeTab, setActiveTab] = useState("emprendimiento");

  const stages = {
    informal: {
      title: "Negocio Informal",
      color: "from-gray-400 to-gray-500",
      iconColor: "text-gray-500",
      borderColor: "border-gray-500",
      features: [
        "Proveedores minoristas locales",
        "Sin empleados registrados",
        "Opera desde casa o espacio público",
        "Sin facturación formal",
        "Limitado acceso a créditos"
      ],
      requirements: [
        "Documento de identidad",
        "Registro de actividad económica básico"
      ]
    },
    emprendimiento: {
      title: "Emprendimiento Formal",
      color: "from-blue-400 to-blue-600",
      iconColor: "text-blue-500",
      borderColor: "border-blue-500",
      features: [
        "Proveedores regionales",
        "1-2 empleados registrados",
        "1 local comercial (arrendado)",
        "Facturación básica",
        "Acceso a programas de apoyo"
      ],
      requirements: [
        "Registro mercantil en Cámara de Comercio",
        "RUT en DIAN",
        "Licencia de funcionamiento",
        "Libros contables básicos"
      ]
    },
    empresa: {
      title: "Empresa Consolidada",
      color: "from-green-400 to-green-600",
      iconColor: "text-green-500",
      borderColor: "border-green-500",
      features: [
        "Proveedores nacionales/internacionales",
        "+2 empleados con todas las prestaciones",
        "Múltiples sucursales comerciales",
        "Sistema contable completo",
        "Acceso a financiamiento bancario"
      ],
      requirements: [
        "Constitución como persona jurídica",
        "Matrícula mercantil completa",
        "RUT con responsabilidades tributarias",
        "Registro ante MinComercio",
        "Sistema de facturación electrónica"
      ]
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
            Evolución de tu Negocio en Zipaquirá
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Descubre en qué etapa se encuentra tu negocio y los requisitos para dar el siguiente paso
          </p>
        </motion.div>

        {/* Selector de etapas */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-md">
            {Object.keys(stages).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTab === key
                    ? `text-white bg-gradient-to-r ${stages[key].color} shadow-md`
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {stages[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido interactivo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tarjeta de características */}
          <motion.div
            key={`features-${activeTab}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-white p-6 rounded-xl shadow-lg border-t-4 ${stages[activeTab].borderColor}`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${stages[activeTab].color}`}></span>
              Características del {stages[activeTab].title}
            </h3>
            <ul className="space-y-3">
              {stages[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className={`h-5 w-5 ${stages[activeTab].iconColor} mr-2 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tarjeta de requisitos */}
          <motion.div
            key={`requirements-${activeTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`bg-white p-6 rounded-xl shadow-lg border-t-4 ${stages[activeTab].borderColor}`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${stages[activeTab].color}`}></span>
              Requisitos para {activeTab === "informal" ? "formalizarte" : "el siguiente nivel"}
            </h3>
            <ul className="space-y-3">
              {stages[activeTab].requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <div className={`flex-shrink-0 h-5 w-5 ${stages[activeTab].iconColor} mr-2 mt-0.5 flex items-center justify-center font-bold`}>
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Comparativa visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
            Comparativa entre Etapas
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspecto</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Informal</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Emprendimiento</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Proveedores</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-500">Minoristas locales</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-blue-600">Regionales</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-green-600">Nacionales/Internacionales</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Empleados</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-500">0 registrados</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-blue-600">1-2 empleados</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-green-600">+2 empleados</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sucursales</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-500">0 (desde casa)</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-blue-600">1 local</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-green-600">Múltiples locales</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Capital</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-500">Bajo</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-blue-600">Mediano</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-green-600">Alto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Llamado a la acción */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
        >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para dar el siguiente paso?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                En Zipaquirá te apoyamos en cada etapa del crecimiento de tu negocio
            </p>
            <Link 
                href="/PricingPlans"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
            Asesoría Personalizada
            </Link>
        </motion.div>
      </div>
    </section>
  );
}