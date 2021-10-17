import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div>
      <hr/>
        <button className="btn btn-outline-danger">Inicio</button>
        <button className="">Cadastro</button>
        <button className="">Login</button>
        <button className="">Dashboard</button>
      <hr/>

      <Home/>
      <Register/>
      <Login/>
      <Dashboard/>
    </div>
  );
}
