import Input from "../../../components/Input.jsx";
import AuthSubmitButton from "./AuthSubmitButton.jsx";
import {useState} from "react";

function SignInForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    async function handleSubmit(event) {
        event.preventDefault();

        // Aqui podemos enviar la info a firebase
        console.log('Enviamos los datos:', formData);
    }

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

    return (
        <form className="w-full space-y-3" onSubmit={handleSubmit}>
            <Input
                type="text"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                placeholder="nombre@mail.com"
            />
            <Input
                type="password"
                name="password"
                label="Contraseña"
                value={formData.password}
                onChange={handleChange}
                placeholder=""
            />
            <AuthSubmitButton>Ingresar</AuthSubmitButton>
        </form>
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