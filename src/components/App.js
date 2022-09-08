import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Login from './Login';
import Account from "./Account";
import AddTransaction from "./AddTransaction";
import About from "./About";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565c0"
    },
    secondary: red
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
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
      </ThemeProvider>
  );
}

export default App;

