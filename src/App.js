import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./config/Routes";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {useEffect, useState} from "react";

const palette = {
  palette: {
    primary: {
      main: '#fea300'
    },
  }
};

export default function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [theme, setTheme] = useState(createTheme(palette));

  const turnDarkMode = () => {
    setDarkmode(true);
    setTheme(createTheme({palette: {
      mode: 'dark',
    }}));
  }

  const turnLightMode = () => {
    setDarkmode(false);
    setTheme(createTheme(palette));
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>

        <Routes isDarkmode={darkmode} darkmodeOn={turnDarkMode} darkmodeOff={turnLightMode}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}
