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
            <a href="#" className="text-black-700 hover:text-black">
              Proyectos
            </a>
            <a href="#" className="text-black-700 hover:text-black">
              Contacto
            </a>
          </div>

          {/* Botón Login */}
          <div>
            <Link href="/login">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    {/* Diálogo */}
      <SobreMiDialog open={showDialog} onClose={() => setShowDialog(false)} />
    </>
  );
};
