import React from 'react';
import { TextSpan, LoginSectionViewStyled, LoginBoxStyled, LoginLogoStyled, LoginTitleStyled, DescriptionStyled, ClickButtonStyled } from './LoginSectionView.styles';
import logoBlack from '../../assets/images/42_logo_black.svg';

const LoginSectionView = () => <LoginSectionViewStyled>LoginSectionView</LoginSectionViewStyled>;

export const LoginLogo = () => (
	<LoginLogoStyled>
		<img src={logoBlack} alt="logo" width="95"/>
	</LoginLogoStyled>
);

export const LoginBox = () => (
	<LoginBoxStyled>.</LoginBoxStyled>
);

export const LoginTitle = () => (
	<LoginTitleStyled>Welcome<br/>Matching42!</LoginTitleStyled>
);

export const Description = () => (
	<DescriptionStyled>
		아래 로그인 버튼을 눌러 시작해보세요!<br/>
		현재 <TextSpan>260명</TextSpan>의 카뎃이 이용하고 있습니다.<br/><br/>
		혹시 알아요? <TextSpan>Matching42</TextSpan>에서 <TextSpan>인생 동료</TextSpan>를 만날지!<br/>
	</DescriptionStyled>
);

export const ClickButton = () => (
	<ClickButtonStyled>로그인</ClickButtonStyled>
	);
	

export default LoginSectionView;
