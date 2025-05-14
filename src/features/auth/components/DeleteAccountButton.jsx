import { useAuth } from "../context/authContext.jsx";
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../../components/Button.jsx";

function DeleteAccountButton() {
    const { deleteAccount } = useAuth();
    const [errorDelete, setErrorDelete] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    const handleDeleteClick = () => {
        setShowForm(true);
    };

    const handleCancel = () => {
        setShowForm(false);
        setEmail('');
        setPassword('');
        setErrorDelete('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const confirm = window.confirm("¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.");
        if (!confirm) return;

        if (!email || !password) {
            setErrorDelete("Por favor ingresa tu correo y contraseña para proceder.");
            return;
        }

        setErrorDelete('');

        try {
            await deleteAccount(email, password);
            navigate("/");
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-credential':
                    setErrorDelete('Correo o contraseña incorrectos');
                    break;
                case undefined:
                    setErrorDelete('');
                    break;
                default:
                    setErrorDelete('Ha ocurrido un error y no es posible verificar la cuenta para su eliminación');
                    break;
            }
        }
    };

    return (
        <>
            {!showForm ? (
                <Button
                    variant="quinary"
                    size="md"
                    onClick={handleDeleteClick}
                    className="p-2 w-full"

                >
                    Delete Account
                </Button>
            ) : (
                <div className="right-4 bg-white text-black p-4 rounded-lg shadow-lg z-50 w-55">
                    {errorDelete && <p className="text-red-700 mb-5 font-bold">{errorDelete}</p>}
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2 border rounded mb-2"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-2 border rounded mb-2"
                        />
                        <div className="flex justify-between">
                            <Button type="submit" variant="quinary"
                                size="sm" className=" px-3 py-1">
                                Confirmar
                            </Button>
                            <Button type="button" variant="tertiary" size="sm" onClick={handleCancel} className="px-3 py-1">
                                Cancelar
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default DeleteAccountButton;