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
            console.error("Error al eliminar cuenta:", error.message);
            setErrorDelete(`Error: ${error.message}`);
        }
    };

    return (
        <>
            {!showForm ? (
                <Button
                    variant="quinary"
                    size="lg"
                    onClick={handleDeleteClick}
                    className="p-2"
                >
                    DeleteAccount
                </Button>
            ) : (
                <div className="right-4 bg-white text-black p-4 rounded-lg shadow-lg z-50 w-55">
                    {errorDelete && <p className="text-red-700">{errorDelete}</p>}
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
                                Confirm
                            </Button>
                            <Button type="button" variant="tertiary" size="sm" onClick={handleCancel} className="px-3 py-1">
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

export default DeleteAccountButton;