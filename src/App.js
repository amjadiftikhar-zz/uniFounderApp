import React from "react";
import NavBar from "./common/navigation/NavBar";
import HomePage from "./features/home/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./common/footer/Footer";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
