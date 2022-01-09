import React, { useCallback } from 'react';
import { LoginSectionViewStyled, LoginBox, Description, ClickButton, LogoBox } from './LoginSectionView.styles';
import logoBlack from '../../assets/images/42_logo_black.svg';

const LoginSectionView = ({ onLoginButtonClick }) => {
  const handleLoginButtonClick = useCallback(() => {
    onLoginButtonClick?.();
  }, [onLoginButtonClick]);

  return (
    <LoginSectionViewStyled>
      <LoginBox className='login_box__responsive'>
        <LogoBox>
          <LogoBox.Logo>
            <img src={logoBlack} alt="logo" />
          </LogoBox.Logo>
          <LogoBox.Title>
            Welcome
            <br />
            Matching42!
          </LogoBox.Title>
        </LogoBox>
        <Description>
          아래 로그인 버튼을 눌러 시작해보세요!
          <br />
          현재 <Description.Text>260명</Description.Text>의 카뎃이 이용하고 있습니다.
          <br />
          <br />
          혹시 알아요? <Description.Text>Matching42</Description.Text>에서 <Description.Text>인생 동료</Description.Text>를 만날지!
          <br />
        </Description>
        <ClickButton onClick={handleLoginButtonClick}>로그인</ClickButton>
      </LoginBox>
    </LoginSectionViewStyled>
  );
};

export default LoginSectionView;
