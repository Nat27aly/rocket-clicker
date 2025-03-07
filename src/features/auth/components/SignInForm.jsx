import Input from "../../../components/Input.jsx";
import AuthSubmitButton from "./AuthSubmitButton.jsx";
import { useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router";

function SignInForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })


    const { signin } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Esta funcion se llama cada vez que el input detecta un cambio
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        const newFormData = {
            ...formData, // Spread operator
            [name]: value
        };

        setFormData(newFormData);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError(''); // Limpiar el error previo

        if (!formData.email || !formData.password) {
            setError("Debes completar los campos email y contraseña");
            return;
        }

        try {
            await signin(formData.email, formData.password);
            navigate('/testHome'); // Redirige al inicio o a la página principal
        } catch (error) {
            // Maneja el error de autenticación
            switch (error.code) {
                case 'auth/user-not-found':
                    setError("El usuario no está registrado");
                    break;
                case 'auth/wrong-password':
                    setError("La contraseña es incorrecta");
                    break;
                case 'auth/invalid-email':
                    setError("El correo electrónico no tiene un formato válido");
                    break;
                default:
                    setError("Hubo un error en el inicio de sesión");
                    break;
            }
        }
    }



    return (
<<<<<<< HEAD
        <>
=======
        <div>
>>>>>>> c0527479e020c42adbb3ec0b477ea1717667d40b
            <form className="w-full space-y-3" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="email"
                    id="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nombre@mail.com"
                />
                <Input
                    type="password"
                    name="password"
                    id="password"
                    label="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder=""
                />
                <AuthSubmitButton>Ingresar</AuthSubmitButton>
            </form>

            {error && <p>{error}</p>}
<<<<<<< HEAD
        </>
=======
        </div>
>>>>>>> c0527479e020c42adbb3ec0b477ea1717667d40b
    );
}

// EJEMPLO: De una operacion asíncrona que toma 3s
function simulateAsyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Operacion OK')
        }, 3000);
    })
}

export default SignInForm;