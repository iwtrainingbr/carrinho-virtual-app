import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Counter from "./pages/Counter";
import Navbar from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/contador" component={Counter} />
      </Switch>
    </BrowserRouter>
  );
}
