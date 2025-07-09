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
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">

            {/* Marca y derechos */}
            <div className="text-center md:text-left">
              <span className="text-xl font-bold block">NicolasTM</span>
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados.</p>
            </div>

            {/* Navegación */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition">Inicio</a>
              <button onClick={() => setShowDialog(true)} className="text-gray-300 hover:text-white transition">Sobre Mi</button>
              <a href="#proyectos" className="text-gray-300 hover:text-white transition">Proyectos</a>
              <a href="#habilidades" className="text-gray-300 hover:text-white transition">Habilidades</a>
              <a href="#contacto" className="text-gray-300 hover:text-white transition">Contacto</a>
              <a href="#timeline" className="text-gray-300 hover:text-white transition">Sección extra</a>
            </div>

            {/* Redes sociales */}
            <div className="flex justify-center gap-4">
              <a href="https://github.com/BaljeetTM" target="_blank" className="text-gray-300 hover:text-white transition">GitHub</a>
              <a href="#" className="text-gray-300 hover:text-white transition">LinkedIn</a>
              <Link href="https://www.instagram.com/n.tapiaacr_/" target="_blank">
                <img src="/logo_ig.png" alt="Logo Instagram" className="h-8 w-auto" />
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
