import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./config/Routes";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const myPalette = createTheme({
  palette: {
    primary: {
      main: '#fea300'
    },
  }
});

export default function App() {
  return (
    <ThemeProvider theme={myPalette}>
      <BrowserRouter>
        <Navbar/>

        <Routes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}
