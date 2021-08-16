import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={LoginPage} /> */}
        <Route path="*" component={Notfound} />
      </Switch>
    </Router>
  );
};

export default App;
