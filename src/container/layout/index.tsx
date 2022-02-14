import React from 'react';
import styled from 'styled-components';
import Aside from './Aside';
import Header from './Header';
import Footer from './Footer';
import appRoutes from '_routes';
import { Switch, Route, Redirect } from 'react-router-dom';

const MainApp = styled.div``;
const MainContent = styled.div`
  padding-top: 88px;
`;

const Layout: React.FunctionComponent = (props) => {
  function Loading() {
    return <React.Fragment>Loading...</React.Fragment>;
  }

  const redirectUrl = '/orders';
  return (
    <MainApp id="app" className="aside-is-expanded">
      <Header />
      <Aside />
      <MainContent id="main-app">
        <React.Suspense fallback={Loading}>
          <Switch>
            {appRoutes.map((route, idx) => {
              const { path, exact, component: _component, name: _name, ...rest } = route;
              return route.component ? (
                <Route
                  key={idx}
                  strict
                  path={path}
                  exact={exact}
                  render={(props) => {
                    return <route.component {...(props as any)} {...rest} />;
                  }}
                />
              ) : null;
            })}
            <Redirect from="/" to={redirectUrl} />
          </Switch>
        </React.Suspense>
      </MainContent>
      <Footer />
    </MainApp>
  );
};

export default Layout;
