"use client";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";



export default function Proyectos() {
    const proyectos = [
        {
            titulo: "VHS: Los Xipetiaos 2.0",
            imagenes: ["/vhsfoto.png", "/vhsfoto1.png"],
            descripcion: `Video Horror Scream (VHS) es un juego 2D retro con estilo pixel-art. Con una tematica de
                            terror, donde el personaje escogido debe huir de los asesion cumpliendo una series de pruebas para poder 
                            escapar con exito. Desarrollado en Unity.`,
            github: [
                { label: null, url: "https://github.com/BogeyedBear/Los-xipetiaos-2.0" }
            ],
        },
        {
            titulo: "Divinity",
            imagenes: ["/fotoDinivity2.jpg", "/fotoDinivity1.jpg"],
            descripcion: `Divinity es un intenso juego 2D para celulares, con estilo pixel-art en el que avanzas por
                            fases llenas de acción, enfrentándote a jefes
                            angélicos en cada nivel. En pantalla, el personaje principal
                            dispara para derrotar a oleadas de enemigos y, en especial, al jefe ángel
                            en combates desafiantes donde
                            solo tu habilidad y reflejos permiten sobrevivir y avanzar.
                            Desarrollado en Unity.`,
            github: [
                { label: null, url: "https://github.com/BaljeetTM/ProjectoKawaboonga" }
            ],
        },
        {
            titulo: "Desarrollo de E-Commerce",
            imagenes: ["/fotoEcom.png", "/fotoEcom1.png"],
            descripcion: <span>Este proyecto consiste en una plataforma de comercio electrónico desarrollada siguiendo los requerimientos del taller
                            de la asignatura <strong>Introducción al Desarrollo Web/Móvil</strong> en la Universidad Católica del Norte.
                            La aplicación permite a los usuarios explorar un catálogo de productos, filtrar y ordenar
                            artículos, gestionar un carrito de compras, realizar pedidos y mantener un historial de transacciones.
                            Se implementaron tres roles distintos: <strong>visitante</strong>, <strong>cliente</strong> y <strong>administrador</strong>, cada uno con funcionalidades específicas.
                            El administrador puede gestionar usuarios y productos mediante un panel avanzado.
                            Desarrollado con <strong>HTML5</strong>, <strong>CSS</strong> y <strong>JavaScript puro</strong>, bajo una arquitectura cliente-servidor modular y escalable.</span>,
            github: [
                { label: "Frontend", url: "https://github.com/BaljeetTM/taller2-frontend" },
                { label: "Backend", url: "https://github.com/BaljeetTM/TallerWebMovil" }
            ],
        }
    ];

    return (
        <div id="proyectos" className="w-full px-4 md:px-8 lg:px-12 max-w-8xl mx-auto my-8">
            <Card className="bg-gray-600 rounded-2xl p-6 shadow-md mt-12">
                <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
                <div className="flex flex-col gap-6">
                    {proyectos.map((proyecto, index) => (
                        <Card key={index} className="w-full">
                            <CardContent className="flex flex-col gap-4 p-4">
                                {/* Texto: derecha en escritorio, abajo en móvil */}
                                <div className="flex justify-between items-start gap-4 flex-wrap">
                                    <div className="flex-1">
                                        <CardHeader className="px-0 pt-0 pb-2">
                                            <CardTitle className="text-xl">{proyecto.titulo}</CardTitle>
                                        </CardHeader>
                                        <p className="text-sm text-gray-700 mb-4">{proyecto.descripcion}</p>
                                        <div className="flex flex-col md:flex-row md:gap-4">
                                            {proyecto.github.map((repo, i) => (
                                                <div key={i}>
                                                    <span className="font-semibold">{repo.label}:</span>{" "}
                                                    <a
                                                        href={repo.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        Ver en GitHub
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Imágenes: izquierda en escritorio, arriba en móvil */}
                                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2">
                                    {proyecto.imagenes.slice(0, 2).map((img, i) => (
                                        <Image
                                            key={i}
                                            src={img}
                                            alt={`${proyecto.titulo} ${i + 1}`}
                                            width={400}
                                            height={300}
                                            className="rounded-lg w-full object-cover"
                                        />
                                    ))}
                                </div>

                            </CardContent>
                        </Card>


                    ))}

                </div>
            </Card>

        </div>

    )
}