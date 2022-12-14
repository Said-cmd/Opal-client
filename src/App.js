import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Login from './pages/Login';
import Account from "./pages/Account";
import AddTransaction from "./pages/AddTransaction";
import Layout from './components/Layout';
import Bills from './pages/categories/Bills';
import EntertainmentAndLeisure from './pages/categories/EntertainmentAndLeisure';
import Food from './pages/categories/Food';
import General from './pages/categories/General';
import Income from './pages/categories/Income';
import Savings from './pages/categories/Savings';
import Shopping from './pages/categories/Shopping';
import Transport from './pages/categories/Transport';
import TransactionWheel from './pages/TransactionWheel';

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
    fontWeightBold: 700,
    primary: "#000000"
  }
})

function App() {
  const [search, setSearch] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Switch>
      <Route exact path="/">
      <Login/>
      </Route>
        <Layout setSearch={setSearch}>
      <Route exact path="/addtransaction">
        <AddTransaction/>
      </Route>
      <Route exact path="/account">
        <Account search={search}/>
      </Route>
      <Route exact path="/transaction-wheel">
          <TransactionWheel />
        </Route>
        <Route exact path="/general">
          <General />
        </Route>
        <Route exact path="/income">
          <Income />
        </Route>
        <Route exact path="/food">
          <Food />
        </Route>
        <Route exact path="/entertainment-leisure">
          <EntertainmentAndLeisure />
        </Route>
        <Route exact path="/savings">
          <Savings />
        </Route>
        <Route exact path="/shopping">
          <Shopping />
        </Route>
        <Route exact path="/transport">
          <Transport />
        </Route>
        <Route exact path="/bills">
          <Bills />
        </Route>
      </Layout>
      </Switch>
      </Router>
      </ThemeProvider>
  );
}

export default App;