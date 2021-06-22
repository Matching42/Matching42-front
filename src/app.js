import React, { useContext, useLayoutEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import resetCss from 'reset-css';
import * as jwtDecode from 'jwt-decode';
import styled, { createGlobalStyle } from 'styled-components';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header/Header';
import AuthContext, { AuthProvider } from './store/auth';

const GlobalStyle = createGlobalStyle`
  ${resetCss};
  html, body {
    height: 100%;
    background-color: #f9f9f9;
  }
  #root {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-weight: normal;
  }
	button {
		border: none;
		padding: 0;
    font-family: 'Spoqa Han Sans', sans-serif;
	}
  a {
    text-decoration: none;
    color: #000;
    width: 100%;
  }
`;

const history = createBrowserHistory({ basename: '/Matching42-front' });

function App() {
  const { state, actions } = useContext(AuthContext);
  const { token, user } = state;
  const { setToken, setUser } = actions;

  const getUserId = token => {
    const user = jwtDecode.default(token);
    if (user !== null) {
      if (user.exp < Date.now() / 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
      } else {
        localStorage.setItem('user', user.user);
        setUser(user.user);
      }
    }
  };

  useLayoutEffect(() => {
    if (token !== null) getUserId(token);
    else {
      const urlParams = new URLSearchParams(window.location.search);
      const getToken = urlParams.get('token');

      if (getToken !== null) {
        localStorage.setItem('token', getToken);
        setToken(getToken);
        getUserId(getToken);
      }
    }
  }, []);

  return (
    <>
      <Router history={history}>
        <Wrapper>
          <Header user={user} />
          <Switch>
            <Route exact path="/">
              {user && user !== 'null' ? <Redirect to="/home" /> : <LoginPage />}
            </Route>
            <Route path="/home">{user && user !== 'null' ? <MainPage user={user} /> : <Redirect to="/" />}</Route>
            <Route path="/detail/:id">{user && user !== 'null' ? <DetailPage user={user} /> : <Redirect to="/" />}</Route>
            {/* Not Found */}
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </Wrapper>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
