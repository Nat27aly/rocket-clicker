import Input from "../../../components/Input.jsx";
import AuthSubmitButton from "./AuthSubmitButton.jsx";
import {useState} from "react";

function SignUpForm(){

    const [formData, setFormData] = useState({
        email:'',
        password:'',
        repeatPassword:''
    });

    function handleSubmit(event) {
        event.preventDefault();
        // Aqui podemos enviar la info a firebase
        console.log('Enviamos los datos:', formData);
    }

    function handleChange(event){
        const name =event.target.name;
        const value= event.target.value;

        const newFormData ={
            ...formData,
        [name]:value
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
                placeholder="nombre@mail.com"/>
            <Input
                type="password"
                name="password"
                label="Contraseña"
                value={formData.password}
                onChange={handleChange}
                placeholder=""/>
            <Input
                type="password"
                name="repeatPassword"
                label="Repite contraseña"
                value={formData.repeatPassword}
                onChange={handleChange}
                placeholder=""/>
            <AuthSubmitButton>Regístrate</AuthSubmitButton>
        </form>
    );
}

export default SignUpForm;