import {useState} from 'react';
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Config(props) {
  const [checked, setChecked] = useState(props.isDarkmode);

  const handleChecked = () => {
    if (checked === false) {
      props.darkmodeOn();
      setChecked(true);
      return;
    }

    setChecked(false);
    props.darkmodeOff();
  }

  return (
      <div>
          <p>Mudar o modo de vizualizaçao da tela</p>
          <b></b>
          <Switch onChange={handleChecked} {...label}  checked={checked} />

      </div>
      );
}
