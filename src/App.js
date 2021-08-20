import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GenresProvider } from "./utils/GenresContext";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";

import Notfound from "./pages/NotFound";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  return (
    <Router>
      <GenresProvider>
        <Toggle />
        <Nav />
        <HelmetProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/genre/:genreID" component={Details} />
            <Route path="*" component={Notfound} />
          </Switch>
        </HelmetProvider>
      </GenresProvider>
    </Router>
  );
};

export default App;
