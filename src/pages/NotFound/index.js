import imgerror from './404.svg';
import {Button} from "@mui/material";
import "./styles.css";

export default function NotFound(props) {
  return (
    <section className="page-notfound">
      <h1>Url não encontrada</h1>
      <img alt="Page not found" width = "100%" src={imgerror}/>

      <p>
      <Button onClick={() => props.history.push ("/")}>Voltar para início</Button>
      </p>
    </section>
  );
}
