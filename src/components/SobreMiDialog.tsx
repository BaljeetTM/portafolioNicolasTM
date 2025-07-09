import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";


interface SobreMiDialogProps {
    open: boolean;
    onClose: () => void;
}

export const SobreMiDialog = ({ open, onClose }: SobreMiDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="w-[90vw] sm:max-w-lg md:max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="text-center">Sobre mí</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col items-center text-center gap-4">
                    <img
                        src="/fotomia.jpeg"
                        alt="Foto de Nicolás"
                        className="w-40 h-52 object-cover rounded-lg"
                    />

                    <div className="text-sm text-gray-700 text-center max-w-prose space-y-3 px-2">
                        <p>
                            Mi nombre es Nicolás Tapia Molina y soy estudiante de Ingeniería Civil en
                            Computación e Informática en la Universidad Católica del Norte (UCN), en Chile.
                        </p>
                        <p>
                            Desde muy joven he tenido interés en la tecnología y la creatividad. Me apasionan áreas
                            como la programación, el desarrollo web, la música, los videojuegos, el
                            deporte y explorar nuevas ideas constantemente.
                        </p>
                        <p>
                            Uno de mis objetivos a futuro es emprender con mi propia marca de
                            ropa, desarrollando una plataforma digital que mezcle diseño, e-commerce y
                            tecnología. Mi meta es combinar mis conocimientos en
                            computación con mis intereses creativos, explorando tanto el
                            desarrollo de software como aspectos relacionados con hardware.
                        </p>
                        <p>
                            Estoy en constante aprendizaje, buscando integrar el mundo del desarrollo con
                            proyectos personales que reflejen quién soy.
                        </p>
                    </div>

                    <a
                        href="/CV_Moderno_NicolasTapia.pdf"
                        download
                        className="bg-gray-600 shadow-md text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                    >
                        Descargar CV
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
};
