'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SobreMiDialog } from './SobreMiDialog';


export const Footer = () => {
  const [showDialog, setShowDialog] = useState(false);
  
  return (
    <>
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Izquierda - Marca */}
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">NicolasTM</span>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>

          {/* Centro - Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition">Inicio</a>
            <button onClick={() => setShowDialog(true)} className="text-gray-300 hover:text-white">
              Sobre Mi
            </button>
            <a href="#proyectos" className="text-gray-300 hover:text-white transition">Proyectos</a>
            <a href="#habilidades" className="text-gray-300 hover:text-white transition">Habilidades</a>
            <a href="#contacto" className="text-gray-300 hover:text-white transition">Contacto</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Sección extra</a>
          </div>

          {/* Derecha - Redes sociales */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/BaljeetTM" aria-label="GitHub" className="text-gray-300 hover:text-white transition">GitHub</a>
            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition">LinkedIn</a>
            <Link href="https://www.instagram.com/n.tapiaacr_/">
                <img src="/logo_ig.png" alt="Logo pequeño" className="h-8 w-auto"/>
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
    {/* Diálogo */}
      <SobreMiDialog open={showDialog} onClose={() => setShowDialog(false)} />
    </>
  );
};
