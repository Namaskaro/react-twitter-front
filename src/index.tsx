import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { ThemeProvider } from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom'
import theme from './theme'
import CssBaseline from '@material-ui/core/CssBaseline';
import {store} from './store/store'
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Router>        
      <Provider store={store}>
      <App/>
      </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

