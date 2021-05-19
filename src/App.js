import React from 'react';
//importing router to navigate through pages
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail"
import Error from "./pages/Error"
//importing components
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
