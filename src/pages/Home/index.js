import {TextField} from "@mui/material";

export default function Home() {
  let escola = 'Iwtraining';
  let curso = 'Frontend';

  return (
    <div>
      <h1>Ola mundo</h1>
      <hr/>
      <h2>{escola}</h2>
      <h3>{curso}</h3>
      <TextField label="Email"/>

    </div>
  )
}
