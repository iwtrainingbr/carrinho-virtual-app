import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function Navbar() {
  return (
    <div>
      <hr/>
        <Button color="primary" variant="contained">Teste</Button>
        <button className="btn btn-outline-danger">
          <Link to="/">Inicio</Link>
        </button>
        <button className="btn btn-outline-danger">
          <Link to="/cadastro">Cadastro</Link>
        </button>
        <button className="btn btn-outline-danger">
          <Link to="/login">Login</Link>
        </button>
        <button className="btn btn-outline-danger">
          <Link to="/dashboard">Dashboard</Link>
        </button>
        <Button color="secondary" variant="contained">
          <Link to="/config">Configuração</Link>
          </Button>
      <button className="btn btn-outline-danger">
        <Link to="/relatorio">Relatorio</Link>
      </button>
      <hr/>
    </div>
  )
}
