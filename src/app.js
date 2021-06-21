import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { RecoilRoot, useRecoilState } from 'recoil';
import resetCss from 'reset-css';
import * as jwtDecode from 'jwt-decode';
import { createGlobalStyle } from 'styled-components';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import { authStore, userStore } from "./store/auth";

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

function App() {
  const [token, setToken] = useRecoilState(authStore);
  const [user, setUser] = useRecoilState(userStore);

  useEffect(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token != null)
    {
      localStorage.setItem('token', token);
      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (token != null)
      setUser(jwtDecode.default(token));
  }, [token]);

  return (
    <>
      <BrowserRouter basename="/Matching42-front">
        <Switch>
          <Route exact path="/home">
            {user ? <MainPage user={user.user} /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            {user ? <Redirect to="/home" /> : <LoginPage />}
          </Route>
          <Route path="/detail/:id" exact render={() => <DetailPage user={user.user} />} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default () => (
  <RecoilRoot><App /></RecoilRoot>
);
