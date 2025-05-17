"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre - Siempre visible */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
              <div className="relative h-10 w-10">
                <Image
                  src="/LogoNidoTeco.png"
                  alt="Logo Formalización Zipaquirá"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="self-center text-xl font-bold whitespace-nowrap text-blue-900">
                NidoTeca
              </span>
            </Link>
          </div>

          {/* Menú para desktop - Oculto en móvil */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50"
                onClick={closeMenu}
              >
                Inicio
              </Link>
              <Link
                href="/FormalizationSteps"
                className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50"
                onClick={closeMenu}
              >
                Pasos
              </Link>
              <Link
                href="/Benefits"
                className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50"
                onClick={closeMenu}
              >
                Beneficios
              </Link>
              <Link
                href="/Requirements"
                className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50"
                onClick={closeMenu}
              >
                Requisitos
              </Link>
              <Link
                href="/CommentsSection"
                className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50"
                onClick={closeMenu}
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Botón Plan Plus y menú móvil */}
          <div className="flex items-center">
            <Link
              href="/PricingPlans"
              className="hidden md:block text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Plan Plus
            </Link>
            
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-blue-50 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:bg-blue-50"
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link
            href="/FormalizationSteps"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50"
            onClick={closeMenu}
          >
            Pasos para Formalizar
          </Link>
          <Link
            href="/Benefits"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50"
            onClick={closeMenu}
          >
            Beneficios
          </Link>
          <Link
            href="/Requirements"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50"
            onClick={closeMenu}
          >
            Requisitos
          </Link>
          <Link
            href="/costos"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50"
            onClick={closeMenu}
          >
            Costos y Tarifas
          </Link>
          <Link
            href="/CommentsSection"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50"
            onClick={closeMenu}
          >
            Preguntas Frecuentes
          </Link>
          <Link
            href="/PricingPlans"
            className="block w-full mt-4 px-3 py-2 rounded-md text-base font-medium text-center text-white bg-green-600 hover:bg-green-700"
            onClick={closeMenu}
          >
            Plan Plus
          </Link>
        </div>
      </div>
    </nav>
  );
}