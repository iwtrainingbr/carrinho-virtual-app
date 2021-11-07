import {TextField, Button, Divider} from "@mui/material";
import "./styles.css";


export default function Login(props) {
  return (
    <div className ="page-login">
      <h1>Login</h1>

      <Divider className="hr"/>

      <TextField label="Email" fullWidth/>
      <TextField type="password" label="Senha" fullWidth/>
      <Button onClick={() => props.history.push('/')} size="large" variant="contained" fullWidth>Entrar</Button>

      <div align="center">
      <p>Ainda não tenho conta</p>
      <Button onClick={() => props.history.push ("/cadastro")}>Cadastre-se</Button>
      </div>
    </div>
  );
}
