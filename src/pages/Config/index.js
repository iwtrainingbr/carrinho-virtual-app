import * as React from 'react';
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Config() {
  return (
      <div>
          <p>Mudar o modo de vizualizaçao da tela</p>
          <b></b>
          <Switch {...label} defaultChecked />

      </div>
      );
}
