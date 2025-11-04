import "./Dashboard.css";
import { Link } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">NombreApp</div>
        <nav className="menu">
          <a href="#" className="active">Dashboard</a>
          <a href="#">Perfil</a>
          <a href="#">Configuración</a>
        </nav>
        <button className="logout">Cerrar Sesión</button>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <header className="header">
          <h2>Bienvenido de nuevo</h2>
          <img
            src="https://i.pravatar.cc/40"
            alt="usuario"
            className="avatar"
          />
        </header>

        <section className="panel">
          <h1>Panel de Control</h1>
          <p>Un resumen de la actividad de tu cuenta.</p>

          {/* Tarjetas de resumen */}
          <div className="stats">
            <div className="card">
              <h3>Proyectos Activos</h3>
              <p className="number">12</p>
            </div>
            <div className="card">
              <h3>Tareas Completadas</h3>
              <p className="number">86</p>
            </div>
            <div className="card">
              <h3>Alertas</h3>
              <p className="number">3</p>
            </div>
            <div className="card">
              <h3>Miembros del equipo</h3>
              <p className="number">8</p>
            </div>
          </div>

          {/* Notificaciones y accesos directos */}
          <div className="bottom-section">
            <div className="notifications">
              <h3>Notificaciones</h3>
              <ul>
                <li>
                  <strong>Actualización del sistema programada</strong>
                  <p>El mantenimiento se realizará el 25 de Diciembre a las 10 PM.</p>
                </li>
                <li>
                  <strong>Nueva factura disponible</strong>
                  <p>Tu factura de Noviembre ya está lista para descargar.</p>
                </li>
                <li>
                  <strong>Recordatorio de reunión</strong>
                  <p>Tienes una reunión de equipo hoy a las 3 PM.</p>
                </li>
              </ul>
              <a href="#" className="see-all">Ver todas las notificaciones</a>
            </div>

            <div className="shortcuts">
              <h3>Accesos Directos</h3>
              <button className="primary">Crear Nuevo Proyecto</button>
              <button>Añadir Tarea</button>
              <button>Invitar Miembro</button>
              <button>Generar Reporte</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;