import React, { useCallback } from 'react';
import { LoginSectionViewStyled, LoginBox, Description, ClickButton, LogoBox } from './LoginSectionView.styles';
import logoBanner from '../../assets/images/logo_banner.gif';

const LoginSectionView = ({ onLoginButtonClick }) => {
  const handleLoginButtonClick = useCallback(() => {
    onLoginButtonClick?.();
  }, [onLoginButtonClick]);

  return (
    <LoginSectionViewStyled>
      <LoginBox>
        <Description>
          <img src={logoBanner} alt="logo" width="360" />
        </Description>
        <ClickButton onClick={handleLoginButtonClick}>로그인</ClickButton>
      </LoginBox>
    </LoginSectionViewStyled>
  );
};

export default LoginSectionView;
