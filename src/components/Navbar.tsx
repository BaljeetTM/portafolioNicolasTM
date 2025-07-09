'use client';


import Link from 'next/link';
import { useState } from 'react';
import { SobreMiDialog } from './SobreMiDialog';

export const Navbar = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
    <nav className="bg-gray-600 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/">
            <span className="text-xl font-bold text-black-800 hover:text-black cursor-pointer">
              NicolasTM
            </span>
          </a>

          {/* Enlaces */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => setShowDialog(true)} className="text-black hover:text-white">
              Sobre Mi
            </button>
            <span>|</span>
            <a href="#proyectos" className="text-black-700 hover:text-black">
              Proyectos
            </a>
            <a href="#habilidades" className="text-black-700 hover:text-black">
              Habilidades
            </a>
            <a href="#contacto" className="text-black-700 hover:text-black">
              Contacto
            </a>
            <a href="#" className="text-black-700 hover:text-black">
              Sección extra
            </a>
          </div>
        </div>
      </div>
    </nav>
    {/* Diálogo */}
      <SobreMiDialog open={showDialog} onClose={() => setShowDialog(false)} />
    </>
  );
};
