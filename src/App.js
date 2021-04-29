import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import BlogHome from "./component/BlogHome"
import BlogDetail from "./component/BlogDetail"
import AboutMe from "./component/AboutMe"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={BlogHome} />
            <Route exact path="/detail" component={BlogDetail} />
            <Route exact path="/about-me" component={AboutMe} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
