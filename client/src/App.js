import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Hero />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Saved" component={Saved}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

