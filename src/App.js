import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GenresProvider } from "./utils/GenresContext";
import { ServicesProvider } from "./utils/otherContexts/ServicesFAQContext";
import { GalleryProvider } from "./utils/galleryContext/GalleryContext";

import Nav from "./components/Nav";
import Toggle from "./components/Toggle";

import Notfound from "./pages/NotFound";
import Home from "./pages/Home";
import Details from "./pages/Details";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AnimationsProvider } from "./utils/animationContexts/AnimationsContext";

const App = () => {
  return (
    <Router>
      <GenresProvider>
        <ServicesProvider>
          <GalleryProvider>
            <AnimationsProvider>
              <Toggle />
              <Nav />
              <HelmetProvider>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/genre/:genreID" component={Details} />
                  <Route path="/contact" component={Contact} />
                  <Route path="*" component={Notfound} />
                </Switch>
              </HelmetProvider>
            </AnimationsProvider>
          </GalleryProvider>
        </ServicesProvider>
      </GenresProvider>
    </Router>
  );
};

export default App;
