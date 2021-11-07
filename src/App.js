import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./config/Routes";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {useEffect, useState} from "react";

export default function App() {
  const [darkmode, setDarkmode] = useState(false);

  const [mypalette, setMypalette] = useState(createTheme());

  useEffect( () => {
    setMypalette(createTheme({
      palette: {
        mode:'dark',
      }
    }))
  }, []);
  return (
    <ThemeProvider theme={mypalette}>
      <BrowserRouter>
        <Navbar/>

        <Routes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}
