"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiGithub, SiTailwindcss, SiHtml5, SiCss3 } from 'react-icons/si';



export default function Habilidades() {
    return (
        <div id="habilidades" className="w-full px-4 md:px-8 lg:px-12 max-w-8xl mx-auto my-8">
            <Card className="bg-white rounded-2xl p-6 shadow-md mt-12">
                <h2 className="text-3xl font-bold mb-6">Habilidades</h2>

                {/* Lenguajes */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Lenguajes</h3>
                    <div className="flex flex-wrap gap-3">
                        {[
                            { name: "JavaScript", level: 4, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /> },
                            { name: "TypeScript", level: 3, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /> },
                            { name: "C#", level: 4, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" /> },
                            { name: "SQL", level: 3, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" /> },
                            { name: "HTML / CSS", level: 5, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" /> }
                        ].map(({ name, level, icon }) => (
                            <div key={name} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                                {icon}
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
                            { name: "Next.js", level: 4, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" /> },
                            { name: "Tailwind CSS", level: 4, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /> },
                            { name: ".NET Core", level: 3, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg" /> },
                            { name: "Unity", level: 4, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-plain.svg" /> }
                        ].map(({ name, level, icon }) => (
                            <div key={name} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                                {icon}
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
                            { name: "Git / GitHub", level: 4, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" /> },
                            { name: "VS Code", level: 5, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" /> },
                            { name: "Figma", level: 3, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" /> },
                            { name: "Postman", level: 3, icon: <img className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" /> }
                        ].map(({ name, level, icon }) => (
                            <div key={name} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                                {icon}
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