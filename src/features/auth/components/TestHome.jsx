import { useAuth } from "../context/authContext";



// BORRAR DESPUÉS DE LA ENTREGA- ARCHIVO DE PRUEBA INICIO DE SESIÓN


export function TestHome() {
    const { formData } = useAuth();
    //console.log(formData);

    return  <div className="flex items-center justify-center min-h-screen">
    <div className="text-white text-2xl font-bold">
      Bien! Acabas de iniciar sesión! Aquí aparecerá el juego, que todavía está en desarrollo
    </div>
  </div>

}