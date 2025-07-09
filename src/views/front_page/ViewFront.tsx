'use client';


import Contacto from "@/components/Contacto";
import { Footer } from "@/components/Footer";
import Habilidades from "@/components/Habilidades";
import { Navbar } from "@/components/Navbar";
import Proyectos from "@/components/Proyectos";
import { SobreMiDialog } from "@/components/SobreMiDialog";
import { useState } from "react";



export default function ViewFront() {
    const [showDialog, setShowDialog] = useState(false);
    
    return (
        <>
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen relative h-64 md:h-120">
                <img src="/avataaars.png" alt="Logo pequeño" className="h-70 w-auto"/>
                <h1 className="text-4xl font-bold mb-4">Bienvenido a mi portafolio</h1>
                <p className="text-lg text-gray-850 text-center max-w-xl">
                    Soy Nicolás Tapia Molina, estudiante de Ingeniería Civil en Computación e Informática en la UCN. 
                    En este portafolio encontrarás una muestra de mis 
                    proyectos, habilidades y aspiraciones profesionales en el mundo del desarrollo tecnológico.
                </p>
                <a className="bg-gray-600 shadow-md text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                    <button onClick={() => setShowDialog(true)} className="text-black hover:text-white">
                        Más sobre mi...
                    </button>
                </a>
            </div>
            <Proyectos/>
            <Habilidades/>
            <Contacto/>
            <Footer/>
        </div>
        {/* Diálogo */}
            <SobreMiDialog open={showDialog} onClose={() => setShowDialog(false)} />
        </>
    );
}