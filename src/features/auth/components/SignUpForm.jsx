import Input from "../../../components/Input.jsx";
import AuthSubmitButton from "./AuthSubmitButton.jsx";
import { useState } from "react";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router";
import { saveProgressToFirestore } from "../../../lib/firestore.js";
import { sendEmailVerification } from "firebase/auth";

function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const { signup } = useAuth();
  const [error, setError] = useState(""); // Mensajes de advertencia 'input'.
  const navigate = useNavigate(); // Redirección a Home

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    const newFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(newFormData);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (formData.password !== formData.repeatPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (!formData.email || !formData.password) {
      setError("Debes completar ambos campos: email y contraseñas");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError("El email no tiene un formato válido");
      return;
    }

    const domainMails = [
      "gmail.com",
      "hotmail.com",
      "outlook.com",
      "yahoo.com",
      "hotmail.es",
      "outlook.es",
      "live.com",
      "icloud.com",
    ];
    const emailDomain = formData.email.split("@")[1];
    if (!domainMails.includes(emailDomain)) {
      setError("El dominio del correo no es válido.");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "La contraseña debe contener al menos 8 caracteres, incluyendo un símbolo, un número y una letra."
      );
      return;
    }

    try {
      const userCredential = await signup(formData.email, formData.password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      await saveProgressToFirestore(user.uid, user.email, 0, []);
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("El correo ya está registrado");
          break;
        case "auth/invalid-email":
          setError("El formato del correo no es válido");
          break;
        case "auth/missing-password":
          setError("Debes ingresar una contraseña");
          break;
        default:
          setError("Error desconocido. Si persiste, contacta al soporte.");
          break;
      }
    }
  }

  return (
    <>
      <section
        role="region"
        aria-labelledby="sign-up-title"
        className="w-full max-w-md mx-auto"
      >
        <h2 id="sign-up-title" className="sr-only">
          Registro de usuario
        </h2>
        <form className="w-full space-y-3" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            label="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nombre@mail.com"
            aria-describedby={error ? "signup-form-error" : undefined}
          />
          <Input
            type="password"
            name="password"
            id="password"
            label="Contraseña"
            value={formData.password}
            onChange={handleChange}
            placeholder=""
            aria-describedby={error ? "signup-form-error" : undefined}
          />
          <Input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            label="Repite contraseña"
            value={formData.repeatPassword}
            onChange={handleChange}
            placeholder=""
            aria-describedby={error ? "signup-form-error" : undefined}
          />
          <AuthSubmitButton>Regístrate</AuthSubmitButton>
        </form>
      </section>
      {error && (
        <p id={"signin-form-error"} className="text-red-700 mt-3">
          {error}
        </p>
      )}
    </>
  );
}

export default SignUpForm;
