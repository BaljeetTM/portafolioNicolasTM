"use client";

import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";


export default function Proyectos() {
    return(
        <div id="proyectos" className="w-full px-4 md:px-8 lg:px-12 max-w-8xl mx-auto my-8">
                        <Card className="bg-gray-600 rounded-2xl p-6 shadow-md mt-12">
                            <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
                            <div className="w-full px-4 md:px-8 lg:px-12 max-w-8xl mx-auto my-8">
                                <Card className="mb-4 shadow-xl">
                                    <CardHeader>
                                        <CardTitle>VHS: Los Xipetiaos 2.0</CardTitle>
                                        <CardAction>
                                            <a
                                                href="https://github.com/BogeyedBear/Los-xipetiaos-2.0"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Ver en GitHub
                                            </a>
                                        </CardAction>
                                        <CardContent>
                                            <div className="flex justify-between items-center gap-4">
                                                <p className="text-gray-700 flex-1">
                                                VideoHorrorScream(VHS) es un juego 2D retro con estilo pixel-art.
                                                Con una tematica de terror, donde el personaje escogido debe huir de los asesion cumpliendo una series de
                                                de pruebas para poder escapar con exito. Desarrollado en Unity.
                                                </p>
                                                <img
                                                src="imagenVHS.png"
                                                alt="Banner del juego"
                                                className="h-60 w-auto rounded-lg shadow-md"
                                                />
                                            </div>
                                        </CardContent>
                                    </CardHeader>
                                </Card>
                                <Card className="mb-4 shadow-xl">
                                    <CardHeader>
                                        <CardTitle>Divinity</CardTitle>
                                        <CardAction>
                                            <a
                                                href="https://github.com/BaljeetTM/ProjectoKawaboonga"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                Ver en GitHub
                                            </a>
                                        </CardAction>
                                        <CardContent>
                                            <div className="flex justify-between items-center gap-4">
                                                <p className="text-gray-700 flex-1">
                                                Divinity es un intenso juego 2D con estilo pixel-art en el que avanzas por
                                                fases llenas de acción, enfrentándote a jefes
                                                angélicos en cada nivel. En pantalla, el personaje principal
                                                dispara para derrotar a oleadas de enemigos y, en especial, al jefe ángel
                                                en combates desafiantes donde
                                                solo tu habilidad y reflejos permiten sobrevivir y avanzar.
                                                Desarrollado en Unity.
                                                </p>
                                                <img
                                                src="fotoDinivity2.jpg"
                                                alt="Banner del juego"
                                                className="h-60 w-auto rounded-lg shadow-md"
                                                />
                                                <img
                                                src="fotoDinivity1.jpg"
                                                alt="Banner del juego"
                                                className="h-60 w-auto rounded-lg shadow-md"
                                                />
                                            </div>
                                        </CardContent>
                                    </CardHeader>
                                </Card>
                                <Card className="mb-4 shadow-xl">
                                    <CardHeader>
                                        <CardTitle>Desarrollo de E-Commerce</CardTitle>
                                        <CardAction className="flex flex-col items-start space-y-1">
                                        <div>
                                            <span className="font-semibold">Frontend:</span>{" "}
                                            <a
                                            href="https://github.com/BaljeetTM/taller2-frontend"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                            >
                                            Ver en GitHub
                                            </a>
                                        </div>
                                        <div>
                                            <span className="font-semibold">Backend:</span>{" "}
                                            <a
                                            href="https://github.com/BaljeetTM/TallerWebMovil"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                            >
                                            Ver en GitHub
                                            </a>
                                        </div>
                                        </CardAction>
                                        <CardContent>
                                        <div className="flex flex-col gap-4">
                                            {/* Descripción + imágenes en fila */}
                                            <div className="flex justify-between gap-6">
                                            <p className="text-gray-700 flex-1">
                                                Este proyecto consiste en una plataforma de comercio electrónico desarrollada siguiendo los requerimientos del taller de la asignatura <strong>Introducción al Desarrollo Web/Móvil</strong> en la Universidad Católica del Norte.
                                                La aplicación permite a los usuarios explorar un catálogo de productos, filtrar y ordenar artículos, gestionar un carrito de compras, realizar pedidos y mantener un historial de transacciones.
                                                Se implementaron tres roles distintos: <strong>visitante</strong>, <strong>cliente</strong> y <strong>administrador</strong>, cada uno con funcionalidades específicas.
                                                El administrador puede gestionar usuarios y productos mediante un panel avanzado.
                                                Desarrollado con <strong>HTML5</strong>, <strong>CSS</strong> y <strong>JavaScript puro</strong>, bajo una arquitectura cliente-servidor modular y escalable.
                                            </p>
                                            
                                            <div className="flex flex-col gap-2 items-center">
                                                <img
                                                src="fotoEcom.png"
                                                alt="Captura de tienda"
                                                className="h-48 w-auto rounded-lg shadow-md"
                                                />
                                                <img
                                                src="fotoEcom1.png"
                                                alt="Carrito de compras"
                                                className="h-48 w-auto rounded-lg shadow-md"
                                                />
                                            </div>
                                            </div>
                                        </div>
                                        </CardContent>
                                    </CardHeader>
                                </Card>
                            </div>
                        </Card>
                    </div>
    )
}