import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <RouterProvider router={createBrowserRouter(AppRouter)} />
  );
}

export default App;
