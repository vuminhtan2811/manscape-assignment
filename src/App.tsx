import React from 'react';
import Layout from 'container/layout';
import { ModalProvider } from 'hook/modal';
import { RouteProps } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProvideRouter, Route, Router, Switch } from 'hook/routers';
import './App.css';

const render = (props: RouteProps) => <Layout {...props} />;
function App() {
  return (
    <ProvideRouter>
      <ModalProvider>
        <Router>
          <Switch>
            <Route path="/" render={render} />
          </Switch>
          <ToastContainer autoClose={2000} />
        </Router>
      </ModalProvider>
    </ProvideRouter>
  );
}

export default App;
