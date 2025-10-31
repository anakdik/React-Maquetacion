import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Página de Login</h1>
      <Link to="/">Volver al Home</Link>
    </div>
  );
};

export default Login;
