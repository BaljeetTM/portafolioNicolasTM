import { Card } from "./ui/card";

const timelineData = [
  {
    year: "2002",
    title: "Nacimiento",
    description: "Naci en Iquique y entre a estudiar al Colegio Samca Arumanti hasta 5° básico.",
  },
  {
    year: "2010",
    title: "Cambio de Ciudad",
    description: "A los 8 años nos mudamos a Antofagasta y tuve que dejar toda mi vida en Iquique, llegue a estudiar al NetlandSchool.",
  },
  {
    year: "2019",
    title: "Sali de Cuarto Medio",
    description: "Logre salir de cuarto medio en el NetlandSchool, aunque no sabia que estudiar.",
  },
  {
    year: "2020",
    title: "Empiezos en la Universidad",
    description: "En 2020, entre a la Universidad de Antofagasta a la carrera Terapia Ocupacional, por temas de covid y diversas cosas me sali a mitad de año.",
  },
  {
    year: "2021",
    title: "Vuelvo a la Universidad",
    description: "Entro a la UCN a la carrera de Ing.Civil Plan Común, y al finalizar el año me tiendo a elegir Ing.Civil en computación e informatica(Carrera Actual).",
  },
];

export const Timeline = () => {
  return (
    <div id="proyectos" className="w-full px-4 md:px-8 lg:px-12 max-w-8xl mx-auto my-8">
      <Card>
        <section className="px-4 py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Mi Trayectoria</h2>
          <div className="relative border-l border-gray-300 dark:border-gray-600">
            {timelineData.map((item, idx) => (
              <div key={idx} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 mt-1.5"></div>
                <p className="text-sm text-gray-500">{item.year}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Card>
    </div>
  );
};
