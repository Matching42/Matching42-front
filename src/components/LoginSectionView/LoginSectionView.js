import React from 'react';
import { LoginSectionViewStyled, LoginBoxStyled, LoginTitleStyled, DescriptionStyled, ClickButtonStyled } from './LoginSectionView.styles';
import logoBlack from '../img/42_logo_black.svg';

const LoginSectionView = () => <LoginSectionViewStyled>LoginSectionView</LoginSectionViewStyled>;

export const LoginTitle = () => (
	<LoginTitleStyled>
		<img src={logoBlack} alt="logo" width="95"/>
		Welcome<br/>Matching42!
	</LoginTitleStyled>
);

export const Description = () => (
	<DescriptionStyled>
	아래 로그인 버튼을 눌러 시작해보세요!<br/>
	현재 <b>260명</b>의 카뎃이 이용하고 있습니다.<br/>
	<br/>
	혹시 알아요? <b>Matching42</b>에서 <b>인생 동료</b>를 만날지!<br/>
	</DescriptionStyled>
);

export const ClickButton = () => (
	<ClickButtonStyled>로그인</ClickButtonStyled>
	);
	
export const LoginBox = () => (
	<LoginBoxStyled>수정중</LoginBoxStyled>
);

export default LoginSectionView;