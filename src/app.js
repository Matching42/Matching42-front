import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import resetCss from 'reset-css';
import { createGlobalStyle } from 'styled-components';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';

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
  const [token, setToken] = useState(localStorage.getItem('token'));
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(async () => {
    if (token === 'null' || token === null)
    {
      const res = await urlParams.get('token');
      await localStorage.setItem('token', res);
      await setToken(res);
    }
  }, []);

  return (
    <>
      <BrowserRouter basename="/Matching42-front">
        <Switch>
          <Route exact path="/" component={MainPage}>
            {token ? <MainPage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login" component={LoginPage}>
            {token ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <Route path="/detail/:id" exact component={DetailPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
