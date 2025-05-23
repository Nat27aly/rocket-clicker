import { React, useState } from "react";
import GoogleAuthButton from "./GoogleAuthButton.jsx";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router";
import { getAdditionalUserInfo } from "firebase/auth";

const SignGoogle = () => {
  const { signGoogle } = useAuth();
  const [errorGoogle, setErrorGoogle] = useState("");
  const navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();
    setErrorGoogle("");

    try {
      const result = await signGoogle();
      if (result) {
        const info = getAdditionalUserInfo(result);
        if (info?.isNewUser) {
          navigate("/sign-in");
        } else {
          navigate("/game");
        }
      }
    } catch (error) {
      switch (error.code) {
        case "auth/popup-closed-by-user":
          setErrorGoogle(
            "Has cerrado la ventana emergente y no se ha podido iniciar sesión por Google"
          );
          break;

        case "auth/popup-blocked":
          setErrorGoogle(
            "El navegador ha bloqueado la ventana emergente y no es posible iniciar sesión por Google"
          );
          break;

        case undefined:
          setErrorGoogle("");
          break;

        case "auth/user-disabled":
          setErrorGoogle(
            "Tienes la cuenta inhabilitada, por lo que no puedes acceder"
          );
          break;
        default:
          setErrorGoogle(
            "Ha ocurrido un error y no es posible iniciar sesión por Google"
          );
          break;
      }
    }
  }

  return (
    <>
      <GoogleAuthButton clickFunction={handleClick}>
        Sign in with Google
      </GoogleAuthButton>

      {errorGoogle && <p className="text-red-700 mt-3">{errorGoogle}</p>}
    </>
  );
};

export default SignGoogle;
