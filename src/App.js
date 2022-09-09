import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Login from './pages/Login';
import Account from "./pages/Account";
import AddTransaction from "./pages/AddTransaction";
import About from "./pages/About";
import Layout from './components/Layout';

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
  }, 
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
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
      </Layout>
      </Router>
      </ThemeProvider>
  );
}

export default App;
