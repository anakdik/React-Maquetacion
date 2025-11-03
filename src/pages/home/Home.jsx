import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* 🔹 NAVBAR */}
      <header className="navbar">
        <div className="logo">Mi Aplicación</div>
        <nav className="nav-links">
          <Link to="/login" className="btn-login">
            Iniciar Sesión
          </Link>
          <Link to="/registro" className="btn-register">
            Registrarse
          </Link>
        </nav>
      </header>

      {/* 🔹 HERO */}
      <section className="hero">
        <h1>Bienvenido a Nuestra Plataforma</h1>
        <p>
          Un espacio diseñado para simplificar tus tareas y potenciar tu
          productividad. Empieza en segundos.
        </p>
        <Link to="/dashboard" className="btn-primary">
          Comenzar Ahora
        </Link>
      </section>

      {/* 🔹 FEATURES */}
      <section className="features">
        <h2>Características Principales</h2>
        <p>
          Descubre cómo nuestra plataforma puede ayudarte a alcanzar tus
          objetivos de manera más eficiente.
        </p>

        <div className="feature-cards">
          <div className="feature-card">
            <h3>Gestión Centralizada</h3>
            <p>
              Accede y administra todas tus herramientas y datos desde un único
              panel de control intuitivo.
            </p>
          </div>

          <div className="feature-card">
            <h3>Flujos de Trabajo Ágiles</h3>
            <p>
              Optimiza tus procesos y colabora con tu equipo en tiempo real para
              una mayor productividad.
            </p>
          </div>

          <div className="feature-card">
            <h3>Seguridad Confiable</h3>
            <p>
              Mantenemos tu información segura con protocolos de encriptación y
              protección de última generación.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 FOOTER */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Términos de Servicio</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Contacto</a>
        </div>
        <p>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
