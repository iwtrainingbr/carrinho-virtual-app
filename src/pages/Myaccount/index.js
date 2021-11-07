import {TextField, Button, Divider} from "@mui/material";
import myaccount from './profile.jpg';
import "./styles.css";


export default function Myaccount(props) {
  return (
    <div className ="page-myaccount">
      <h1>Minha Conta</h1>
      <img alt="MyAccount Imagem" width = "35%" src={myaccount}/>
      <Divider className="hr"/>

      <TextField label="Email" fullWidth/>
      <TextField type="password" label="Senha" fullWidth/>
      <Button onClick={() => props.history.push('/')} size="large" variant="contained" fullWidth>Alterar</Button>

      <div align="center">
      <p>Cadastrar nova conta</p>
      <Button onClick={() => props.history.push ("/cadastro")}>Cadastre-se</Button>
      </div>
    </div>
  );
}
