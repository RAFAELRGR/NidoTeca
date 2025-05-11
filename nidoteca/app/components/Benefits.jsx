"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    title: "Acceso a Créditos",
    front: "💰",
    back: "Obtén financiamiento bancario y participa en programas como Bancóldex o el Fondo Emprender",
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Protección Legal",
    front: "🛡️",
    back: "Protege tu marca y patrimonio empresarial bajo el marco legal colombiano",
    color: "from-green-600 to-green-400"
  },
  {
    title: "Oportunidades Comerciales",
    front: "🤝",
    back: "Participa en licitaciones públicas y ruedas de negocios exclusivas para empresas formales",
    color: "from-purple-600 to-purple-400"
  },
  {
    title: "Beneficios Tributarios",
    front: "📉",
    back: "Descuentos especiales en impuestos durante los primeros años de operación",
    color: "from-yellow-600 to-yellow-400"
  },
  {
    title: "Ventajas en Zipaquirá",
    front: "🏛️",
    back: "Acceso a capacitaciones gratuitas y descuentos en el Parque Industrial local",
    color: "from-red-600 to-red-400"
  },
  {
    title: "Credibilidad",
    front: "⭐",
    back: "Aumenta la confianza de clientes y proveedores al operar legalmente",
    color: "from-indigo-600 to-indigo-400"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
            Beneficios Exclusivos
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre cómo formalizar tu empresa transformará tu negocio en Zipaquirá
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="perspective-1000 h-64"
          >
            <div className="relative w-full h-full transition-all duration-500 transform-style-preserve-3d group hover:rotate-y-180">
              {/* Cara frontal */}
              <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center border-2 border-gray-200">
                <span className="text-5xl mb-4">{benefit.front}</span>
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-500">Pasa el cursor para más info</p>
              </div>
              
              {/* Cara trasera */}
              <div className={`absolute w-full h-full backface-hidden rounded-xl p-6 flex items-center justify-center bg-gradient-to-br ${benefit.color} text-white rotate-y-180`}>
                <p className="text-center font-medium">{benefit.back}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Link 
          href="/PricingPlans" 
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          ¡Quiero Formalizar Mi Empresa!
        </Link>
      </motion.div>
    </section>
  );
}