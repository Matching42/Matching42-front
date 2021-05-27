import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import LoginSectionView, { LoginLogo, LoginTitle, Description, ClickButton, LoginBox } from '../components/LoginSectionView/LoginSectionView';
import { LoginBoxStyled } from '../components/LoginSectionView/LoginSectionView.styles';

const MainPage = () => {
  console.log('Login Page');
  return (
    <>
      <Header />
      <LoginSection>
        <LoginBoxStyled>
            <Div>
              <LoginLogo/>
              <LoginTitle/>
            </Div>
            <Description/>
          <ClickButton/>
        </LoginBoxStyled>
      </LoginSection>
    </>
  );
};

const Div = styled.div`
  display: flex;
`;

const LoginSection = styled.div`
  width: 100vw;
  height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

export default MainPage;
