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
    color: #252831;
  }
	button {
		border: none;
		padding: 0;
    font-family: 'Noto Sans', sans-serif;
    color: #252831;
	}
  a {
    text-decoration: none;
    color: #252831;
    width: 100%;
  }

  @media screen and (min-width: 625px) {
    .main_overlay_container {
      height: 100%;
    }
  }
  @media screen and (max-height: 600px) {
    .main_container__responsive {
      height: 100%;
      padding-bottom: 6rem;
    }
  }

  @media screen and (max-width : 1440px) {
    html, body, div, p, span, button, a {
      font-size: 10px;
    }
  }
  @media screen and (min-width : 1441px) and (max-width : 1920px) {
    html, body, div, p, span, button, a {
      font-size: 12px;
    }
  }
  @media screen and (min-width : 1921px) and (max-width : 2560px) {
    html, body, div, p, span, button, a {
      font-size: 16px;
    }
  }
  @media screen and (min-width : 2561px) {
    html, body, div, p, span, button, a {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 1024px)
  {
    html, body, div, p, span, button, a {
      font-size: 9px;
    }
    .main_section__responsive {
      min-width: 768px;
    }
    .detail_section__responsive {
      min-width: 730px;
    }
    .team_list__responsive .scrollbar {
      top: 68px;
    }
  }
  @media screen and (max-width: 768px)
  {
    html, body, div, p, span, button, a {
      font-size: 8px;
    }
    .main_section__responsive {
      min-width: 600px;
    }
    .detail_section__responsive {
      min-width: 600px;
    }
    .team_list__responsive .scrollbar {
      top: 63px;
    }
  }
  @media screen and (max-width: 625px)
  {
    .main_section__responsive {
      flex-direction: column;
      min-width: 350px;
      padding-bottom: 3rem;
    } 
    .main_container__responsive {
      height: 100%;
      padding-top: 86px;
    }
    .main_section__responsive > div {
      width: 100%;
    }
    .main_section__responsive > div > div {
      height: 100%;
      margin-bottom: 20px;
    }
    .detail_section__responsive {
      width: 85%;
      min-width: 300px;
    }
    .detail_section__responsive > div {
      flex-direction: column;
      height: 100%;
    }
    .detail_section__responsive > div > div {
      width: 100%;
      margin-bottom: 25px;
    }
  }
  @media screen and (max-width: 375px)
  {
    .main_section__responsive {
      min-width: 300px;
      width: 100%;
      padding-bottom: 1.5rem;
    }
    .main_section__responsive > div > div {
      border-radius: 0;
      padding: 2.5rem;
    }
    .main_container__responsive {
      padding-top: 80px;
    }
    .team_list__responsive .scrollbar {
      right: 2.5rem;
    }
    .login_box__responsive {
      width: 100%;
      border-radius: 0;
      padding: 6rem 4rem;
    }
    .detail_section__responsive {
      width: 100%;
    }
    .detail_section__responsive > div > div {
      border-radius: 0;
    }
  }
`;

const history = createBrowserHistory({ basename: '/' });

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

  const handleLogoutButtonClick = () => {
    if (token && user) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setToken(null);
      setUser(null);
    }
  };

  return (
    <>
      <Router history={history}>
        <Wrapper>
          <Header user={user} onLogoutButtonClick={handleLogoutButtonClick} />
          <Switch>
            <Route exact path="/">
              {user && user !== 'null' ? <Redirect to="/home" /> : <LoginPage />}
            </Route>
            <Route path="/home">{user && user !== 'null' ? <MainPage user={user} /> : <Redirect to="/" />}</Route>
            <Route path="/detail/:id">{user && user !== 'null' ? props => <DetailPage user={user} {...props} /> : <Redirect to="/" />}</Route>
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
