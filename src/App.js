import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";
import Toggle from "./components/Toggle";

const App = () => {
  return (
    <Router>
      <Toggle />
      <Nav />
      <HelmetProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/login" component={LoginPage} /> */}
          <Route path="*" component={Notfound} />
        </Switch>
      </HelmetProvider>
    </Router>
  );
};

export default App;
