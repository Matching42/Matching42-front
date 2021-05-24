import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import resetCss from 'reset-css';
import { createGlobalStyle } from 'styled-components';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

const GlobalStyle = createGlobalStyle`
  ${resetCss};
  html, body {
    height: 100%;
    background-color: #f9f9f9;
  }
  #root {
    width: 100%;
    height: 100%;
    font-family: 'Spoqa Han Sans', sans-serif;
    font-weight: normal;
  }
	button {
		border: none;
		padding: 0;
    font-family: 'Spoqa Han Sans', sans-serif;
	}
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/Login" exact component={LoginPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
