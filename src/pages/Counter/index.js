import {Button} from "@mui/material";
import {useState} from "react";

export default function Counter() {
  const [quantidade, setQuantidade] = useState(1);
  const [btnRemove, setBtnRemove] = useState('none');

  const aumentar = () => {

    setBtnRemove('none');
    setQuantidade(quantidade + 1);
  };

  const diminuir = () => {
    if (quantidade === 0) {
      setBtnRemove('block');
      return;
    }

    setQuantidade(quantidade - 1);
  };

  return (
    <div>
      <Button style={{display: btnRemove}} variant="contained" color="error">Remover produto?</Button>
      <br/>

      <Button onClick={diminuir} variant="outlined">-</Button>
      {quantidade}
      <Button onClick={aumentar} variant="outlined">+</Button>
    </div>
  )
}
