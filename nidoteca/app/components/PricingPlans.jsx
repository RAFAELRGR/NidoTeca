"use client";

export function PricingPlans() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Fondo decorativo */}
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div 
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-gradient-to-tr from-blue-900/20 to-green-700/20 opacity-30" 
          style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
        />
      </div>
      
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-blue-900">Planes de Asesoría</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Elige el apoyo que necesitas para tu negocio
        </p>
      </div>
      
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600">
        Accede a información gratuita o recibe acompañamiento personalizado de expertos en formalización empresarial.
      </p>
      
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {/* Plan Básico - Gratuito */}
        <div className="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
          <h3 id="tier-basic" className="text-base font-semibold text-green-700">Básico</h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900">COP $0</span>
            <span className="text-base text-gray-500">/siempre</span>
          </p>
          <p className="mt-6 text-base text-gray-600">
            Acceso completo a toda la información sobre formalización empresarial.
          </p>
          <ul role="list" className="mt-8 space-y-3 text-sm text-gray-600 sm:mt-10">
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-green-600" />
              Guías completas paso a paso
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-green-600" />
              Plantillas de documentos legales
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-green-600" />
              Directorio de entidades públicas
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-green-600" />
              Calculadora de costos de formalización
            </li>
          </ul>
          <a
            href="#"
            aria-describedby="tier-basic"
            className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-green-700 ring-1 ring-green-200 hover:ring-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 sm:mt-10"
          >
            Acceder gratis
          </a>
        </div>

        {/* Plan Plus - Pago */}
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-900 to-green-800 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
          <div className="absolute -top-4 right-6 rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-white shadow-sm">
            Recomendado
          </div>
          <h3 id="tier-plus" className="text-base font-semibold text-white">Plus</h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-white">COP $35.000</span>
            <span className="text-base text-gray-300">/mes</span>
          </p>
          <p className="mt-6 text-base text-gray-200">
            Acompañamiento personalizado con expertos en formalización.
          </p>
          <ul role="list" className="mt-8 space-y-3 text-sm text-gray-200 sm:mt-10">
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-white" />
              Todo lo del plan Básico
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-white" />
              Asesoría personalizada 1:1 (Dependiendo el Tipo de Negocio)
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-white" />
              Revisión de documentos legales
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-white" />
              Acceso a red de contadores certificados
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-white" />
              Talleres mensuales exclusivos
            </li>
            <li className="flex gap-x-3">
              <CheckIcon className="h-6 w-5 flex-none text-white" />
              ¡Mantente al tanto de cambios y nuevos beneficios y/o descuentos tributarios al instante!
            </li>
          </ul>
          <a
            href="#"
            aria-describedby="tier-plus"
            className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-blue-900 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-10"
          >
            Contratar plan Plus
          </a>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
    </svg>
  );
}