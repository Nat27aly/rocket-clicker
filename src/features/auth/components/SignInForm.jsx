import Input from "../../../components/Input.jsx";
import AuthSubmitButton from "./AuthSubmitButton.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router";
import useRockStore from "../../game/stores/rock-store.js";
import { auth } from "../../../lib/firebase.js";
import { saveProgressToFirestore } from "../../../lib/firestore.js";

function SignInForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { signin } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const setUid = useRockStore((state) => state.setUid); 

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
        setError('');

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
            const userCredential = await signin(formData.email, formData.password);
            const user = userCredential.user;

            if(!user.emailVerified){
                setError("Debes confirmar el correo de verificación.");
                return;
            }

            setUid(auth.currentUser.uid);
            setUid(user.uid);
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
            <section role="region" aria-labelledby="sign-in-title" className="w-full max-w-md mx-auto">
                <h2 id="sign-in-title" className="sr-only">Inicio de sesión</h2>
            <form className="w-full space-y-3" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="email"
                    id="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nombre@mail.com"
                    aria-describedby={error ? 'signin-form-error' : undefined}

                />
                <Input
                    type="password"
                    name="password"
                    id="password"
                    label="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder=""
                    aria-describedby={error ? 'signin-form-error' : undefined}

                />
                <AuthSubmitButton>Ingresar</AuthSubmitButton>
            </form>
</section>
            {error && <p id={"signin-form-error"} aria-live={"assertive"} className="text-red-700">{error}</p>}
        </>
    );
}

export default SignInForm;