import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Registro from "../pages/registro/Registro";
import Dashboard from "../pages/dashboard/Dashboard";

export const AppRouter = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registro',
    element: <Registro />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
];
