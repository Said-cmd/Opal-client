import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login';
import Account from "./Account";
import AddTransaction from "./AddTransaction";
import About from "./About";

function App() {
  return (
      <Router>
        <Switch>
      <Route exact path="/">
      <Login/>
      </Route>
      <Route exact path="/addtransaction">
        <AddTransaction />
      </Route>
      <Route exact path="/account">
        <Account />
      </Route>
      <Route exact path="/about">
        <About />
        </Route>
      </Switch>
      </Router>

  );
}

export default App;

