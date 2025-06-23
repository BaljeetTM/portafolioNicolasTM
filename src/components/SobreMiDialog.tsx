import {Dialog,DialogContent,DialogDescription,DialogHeader,DialogTitle,} from "@/components/ui/dialog";




interface SobreMiDialogProps {
    open: boolean;
    onClose: () => void;
}

export const SobreMiDialog = ({open, onClose}: SobreMiDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                
                <DialogHeader>
                    <DialogTitle>Sobre mi</DialogTitle>
                    
                </DialogHeader>
                <DialogDescription>
                    <div className="flex flex-row items-start gap-4">
                        <img src="/fotomia.jpeg" alt="Logo pequeño" className="h-50 w-auto mb-4" />
                        <p className="text-gray-900 mt-2">
                            Mi nombre es Nicolas Tapia, soy estudiante de ICCI (Ingenieria civil en Computación e informatica) 
                            en la UCN (Universidad Catolica del Norte) en Chile.
                            Me gustan muchos temas distintos, como la programación, la musica, los videojuegos, hacer deporte 
                            y una gran variedad de cosas más. Una de mis ideas a futura es hacer una marca de ropa y asi mismo 
                            con la carrera que tengo tener mi propia pagina desarrollada por mi mismo y ademas combinarlo con 
                            algo relacionado a fondo con la programación, capaz más por el lad de hardware.
                        </p>
                    </div>
                </DialogDescription>
                
            </DialogContent>
        </Dialog>
    )
}