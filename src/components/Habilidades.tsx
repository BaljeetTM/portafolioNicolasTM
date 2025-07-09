"use client";

import { Card } from "./ui/card";


export default function Habilidades() {
    return(
        <div id="habilidades" className="w-full px-4 md:px-8 lg:px-12 max-w-8xl mx-auto my-8">
                        <Card className="bg-white rounded-2xl p-6 shadow-md mt-12">
                            <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
        
                            {/* Lenguajes */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">Lenguajes</h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "JavaScript", level: 4 },
                                        { name: "TypeScript", level: 3 },
                                        { name: "C#", level: 4 },
                                        { name: "SQL", level: 3 },
                                        { name: "HTML / CSS", level: 5 }
                                    ].map(({ name, level }) => (
                                        <div key={name} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                                            {name}
                                            <span className="text-yellow-400">
                                                {"★".repeat(level)}{"☆".repeat(5 - level)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
        
                            {/* Frameworks y tecnologías */}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">Frameworks y tecnologías</h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "Next.js", level: 4 },
                                        { name: "Tailwind CSS", level: 4 },
                                        { name: ".NET Core", level: 3 },
                                        { name: "Unity", level: 4 }
                                    ].map(({ name, level }) => (
                                        <div key={name} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                                            {name}
                                            <span className="text-yellow-400">
                                                {"★".repeat(level)}{"☆".repeat(5 - level)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
        
                            {/* Herramientas */}
                            <div className="mb-2">
                                <h3 className="text-xl font-semibold mb-2">Herramientas</h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "Git / GitHub", level: 4 },
                                        { name: "VS Code", level: 5 },
                                        { name: "Figma", level: 3 },
                                        { name: "Postman", level: 3 }
                                    ].map(({ name, level }) => (
                                        <div key={name} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                                            {name}
                                            <span className="text-yellow-400">
                                                {"★".repeat(level)}{"☆".repeat(5 - level)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>
    );
}