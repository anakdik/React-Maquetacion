import "./Registro.css";
import { Link } from "react-router-dom";

function Registro() {
    return (
        <div className="registro-container">
            <div className="registro-card">
                <h1 className="titulo">Crea tu Cuenta</h1>
                <p className="subtitulo">
                    Regístrate para empezar a usar la aplicación.
                </p>

                <form className="formulario">
                    <div className="campo">
                        <label>Nombre</label>
                        <input type="text" placeholder="Ingresa tu nombre" />
                    </div>

                    <div className="campo">
                        <label>Correo Electrónico</label>
                        <input type="email" placeholder="tucorreo@ejemplo.com" />
                    </div>

                    <div className="campo">
                        <label>Contraseña</label>
                        <input type="password" placeholder="Crea una contraseña segura" />
                    </div>

                    <div className="campo">
                        <label>Confirmar Contraseña</label>
                        <input
                            type="password"
                            placeholder="Vuelve a escribir la contraseña"
                        />
                    </div>

                    <button className="boton-registrar" type="button">
                        Registrarse
                    </button>
                </form>

                <p className="texto-login">
                    ¿Ya tienes una cuenta?{" "}
                    <a href="/login" className="link-login">
                        Inicia sesión
                    </a>
                </p>
            </div>
        </div>
    );
}


export default Registro;