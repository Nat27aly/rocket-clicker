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
            setError("Por favor, completa ambos campos.");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            setError("El email es incorrecto.");
            return;
        }


        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            setError("La contraseña es incorrecta.");
            return;
        }

        try {
            await signin(formData.email, formData.password);
            navigate('/game');
        } catch (error) {
            // Maneja el error de autenticación
            switch (error.code) {
                case 'auth/invalid-credential':
                    setError("Correo o contraseña incorrectos.");
                    break;
                case 'auth/wrong-password':
                    setError("La contraseña es incorrecta");
                    break;
                case 'auth/invalid-email':
                    setError("El correo electrónico no tiene un formato válido");
                    break;
                case 'auth/user-disabled':
                   setError('Tienes la cuenta inhabilitada, por lo que no puedes acceder');
                   break;
                default:
                    setError("Upss, algo salió mal. Intenta otra vez.");
                    break;
            }
        }
    }



    return (
        <>
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

            {error && <p className="text-red-700">{error}</p>}
        </>
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