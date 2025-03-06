import Input from "../../../components/Input.jsx";
import AuthSubmitButton from "./AuthSubmitButton.jsx";
import { useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from 'react-router-dom';

function SignUpForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: ''
    });

    const { signup } = useAuth();
    const [error, setError] = useState(''); // Mensajes de advertencia 'input'.
    const navigate = useNavigate(); // Redirección a Home

    function handleChange(event){
        const name =event.target.name;
        const value= event.target.value;

        const newFormData ={
            ...formData,
        [name]:value
        };

        setFormData(newFormData);
    }


    async function handleSubmit (event) {
        event.preventDefault();
        setError('');
        // Aqui podemos enviar la info a firebase
        console.log('Enviamos los datos:', formData);

        if (formData.password !== formData.repeatPassword) {
            setError("Las contraseñas no coinciden");
            return
        }

        if (!formData.email || !formData.password) {
            setError("Debes completar los campos email y contraseña");
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            setError("El correo electrónico no tiene un formato válido");
            return;
        }

        const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
        if (!passwordRegex.test(formData.password)) {
            setError("La contraseña debe tener al menos 8 caracteres y un símbolo (!@#$%^&*...)");
            return;
        }

        
        try {
            await signup(formData.email, formData.password);
            navigate('/');
        } catch (error) {

            switch (error.code) {
                case 'auth/email-already-in-use':
                    setError("El correo ya está registrado");
                    break;
                case 'auth/invalid-email':
                    setError("El formato del correo no es válido");
                    break;
                case 'auth/weak-password':
                    setError("La contraseña debe contener mín 6 caracteres");
                    break;
                case 'auth/missing-password':
                    setError("Debes ingresar una contraseña");
                    break;

                default:
                    break;
            }
        }

    }


    return (
        <div>
            <form className="w-full space-y-3" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="email"
                    label="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nombre@mail.com" />
                <Input
                    type="password"
                    name="password"
                    id='password'
                    label="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="" />
                <Input
                    type="password"
                    name="repeatPassword"
                    id="repeatPassword"
                    label="Repite contraseña"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    placeholder="" />
                <AuthSubmitButton>Regístrate</AuthSubmitButton>
            </form>

            <br></br>
            {error && <p>{error}</p>}
        </div>
    );
}

export default SignUpForm;