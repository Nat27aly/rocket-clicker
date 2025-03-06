import { useAuth } from "../context/authContext";



// BORRAR - ARCHIVO DE PRUEBA INICIO DE SESIÓN


export function TestHome() {
    const { formData } = useAuth();
    console.log(formData);

    return  <div className="flex items-center justify-center min-h-screen">
    <div className="text-white text-2xl font-bold">
      test inicio de sesión!
    </div>
  </div>

}