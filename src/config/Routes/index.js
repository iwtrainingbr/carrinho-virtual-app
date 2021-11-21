import {Switch, Route} from "react-router-dom";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import Counter from "../../pages/Counter";
import Report from "../../pages/Report";
import Config from "../../pages/Config";
import Category from "../../pages/Category";
import Vehicle from "../../pages/Vehicle";
import Products from "../../pages/Products";
import NotFound from "../../pages/NotFound";
import Myaccount from "../../pages/Myaccount";
import ReportBug from "../../pages/ReportBug";

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/contador" component={Counter} />
      <Route exact path="/config" component={() => <Config {...props} />}/>
      <Route exact path="/relatorio" component={Report} />
      <Route path="/categorias" component={Category}/>
      <Route path="/veiculos" component={Vehicle}/>
      <Route path="/Produtos" component={Products}/>
      <Route path="/myaccount" component={Myaccount}/>
      <Route path="/reportar-bug" component={ReportBug}/>


      <Route path="/*" component={NotFound}/>
    </Switch>
  )
}
