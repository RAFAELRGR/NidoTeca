"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const steps = [
  {
    id: 1,
    title: "Registro Mercantil",
    description: "En la Cámara de Comercio de Bogotá (Sede Zipaquirá) con tu RUT y formulario RUES completado.",
    icon: <CheckCircleIcon className="h-8 w-8 text-green-600" />,
    color: "bg-blue-50",
    border: "border-l-4 border-blue-600"
  },
  {
    id: 2,
    title: "Registro Tributario",
    description: "Obtén tu RUT en la DIAN (puede hacerse virtual) y clasifica tu actividad económica (CIIU).",
    icon: <CheckCircleIcon className="h-8 w-8 text-green-600" />,
    color: "bg-green-50",
    border: "border-l-4 border-green-600"
  },
  {
    id: 3,
    title: "Legalización",
    description: "Registra tus libros contables (obligatorio para comerciantes) con un costo aproximado de $35,000.",
    icon: <CheckCircleIcon className="h-8 w-8 text-green-600" />,
    color: "bg-purple-50",
    border: "border-l-4 border-purple-600"
  },
  {
    id: 4,
    title: "Permisos Municipales",
    description: "Licencia de funcionamiento en la Secretaría de Planeación de Zipaquirá (desde $120,000 según actividad).",
    icon: <CheckCircleIcon className="h-8 w-8 text-green-600" />,
    color: "bg-yellow-50",
    border: "border-l-4 border-yellow-600"
  },
  {
    id: 5,
    title: "Seguridad Social",
    description: "Afilia a tus empleados a salud, pensiones y registra parafiscales (SENA, ICBF, Cajas de Compensación).",
    icon: <CheckCircleIcon className="h-8 w-8 text-green-600" />,
    color: "bg-red-50",
    border: "border-l-4 border-red-600"
  }
];

export default function FormalizationSteps() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Pasos para Formalizar tu Empresa</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sigue esta guía paso a paso para completar el proceso de formalización en Zipaquirá
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`${step.color} ${step.border} p-6 rounded-r-lg shadow-sm`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {step.icon}
                  <span className="text-gray-900 font-bold">{step.id}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                  {step.id === 1 && (
                    <p className="mt-2 text-sm text-blue-600">
                      <strong>Nota:</strong> Microempresas tienen 50% de descuento
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-2">¿Necesitas ayuda?</h3>
          <p className="text-gray-700">
            Visita la Cámara de Comercio en Carrera 7 #3-07 o llama al (601) 589 3000. Horario: L-V 8am-4pm.
          </p>
        </motion.div>
      </div>
    </section>
  );
}