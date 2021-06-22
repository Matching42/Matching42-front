import React, { useContext, useEffect } from 'react';
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

  useEffect(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token != null) {
      localStorage.setItem('token', token);
      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (token != null) setUser(jwtDecode.default(token));
  }, [token]);

  return (
    <>
      <Router history={history}>
        <Wrapper>
          <Header user={user ? user.user : null} />
          <Switch>
            <Route exact path="/home">
              {user ? <MainPage user={user.user} /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/">
              {user ? <Redirect to="/home" /> : <LoginPage />}
            </Route>
            <Route path="/detail/:id" exact render={() => <DetailPage user={user.user} />} />
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
