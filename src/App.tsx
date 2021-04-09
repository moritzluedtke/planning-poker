import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Toolbar } from './components/Toolbar/Toolbar';
import { GamePage } from './pages/GamePage/GamePage';
import HomePage from './pages/HomePage/HomePage';
import { theme } from './service/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <Router>
          <Toolbar />
          <Switch>
            <Route path='/game/:id' component={GamePage} />
            <Route path='/join/:id' component={HomePage} />
            <Route exact path='/*' component={HomePage} />
          </Switch>
        </Router>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
