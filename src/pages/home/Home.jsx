import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a la página principal</h1>
      <nav>
        <Link to="/login">Ir al Login</Link> |{" "}
        <Link to="/registro">Ir al Registro</Link> |{" "}
        <Link to="/dashboard">Ir al Dashboard</Link>
      </nav>
    </div>
  );
};

export default Home;
