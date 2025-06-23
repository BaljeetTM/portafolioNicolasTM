import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";



export default function ViewFront() {
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen">
                <img src="/sapomagico.jpg" alt="Logo pequeño" className="h-30 w-auto"/>
                <h1 className="text-4xl font-bold mb-4">Bienvenido a mi portafolio</h1>
                <p className="text-lg">Soy Nicolas Tapia Molina y en este portafolio esta toda la informacion sobre mi y cosas que he hecho.</p>
            </div>
            <Footer/>
        </div>
        
    );
}