import "./Login.css";
import { Link } from "react-router-dom";


function Login() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Iniciar Sesión</h2>
                <p className="login-subtitle">
                    Bienvenido de nuevo. Accede a tu cuenta.
                </p>

                <form className="login-form">
                    <label htmlFor="email" className="login-label">
                        Email o Nombre de Usuario
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="login-input"
                        placeholder="tu@ejemplo.com"
                    />

                    <div className="password-row">
                        <label htmlFor="password" className="login-label">
                            Contraseña
                        </label>
                        <a href="#" className="forgot-link">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    <input
                        type="password"
                        id="password"
                        className="login-input"
                        placeholder="********"
                    />

                    <button className="login-button">Iniciar Sesion</button>

                    <p className="register-text">
                        ¿No tienes una cuenta? <a href="#" className="register-link">Registrate</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;