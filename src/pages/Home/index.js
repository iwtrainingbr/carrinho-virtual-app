import {TextField, Divider, Button} from "@mui/material";
import img from "./photo-home.svg";


export default function Home(props) {

  return (
    <div align="center">
      <h1>Bem Vindo ao</h1>
      <p style={{fontSize: '1.3rem', marginTop: '3px'}}>melhor carrinho de compras de FortalCity</p>
      <Divider/>
      <div style={{marginTop: 30}}>
      <img width="50%"  src={img}/>
      </div>
      <div style={{marginTop:30}}>
        <Button onClick={() => props.history.push ("/produtos")} size="large" variant="contained" >Conheça nossos produtos</Button>
        </div>
    </div>
  )
}
