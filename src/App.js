import React from "react";
import NavBar from "./common/navigation/NavBar";
import HomePage from "./features/home/HomePage";
import Posts from "./features/posts/Posts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./common/footer/Footer";

function App() {
  return (
    <div className="app">      
      <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
