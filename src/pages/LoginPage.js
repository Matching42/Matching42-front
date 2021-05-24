import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import LoginSectionView, { LoginTitle, Description, ClickButton, LoginBox } from '../components/LoginSectionView/LoginSectionView';
// import ProfileView from '../components/ProfileView/ProfileView';
// import MyTeamListView from '../components/MyTeamListView/MyTeamListView';
// import MatchingStateView from '../components/MatchingStateView/MatchingStateView';
// import AllTeamListView from '../components/TeamListView/TeamListView';

const MainPage = () => {
  console.log('Login Page');
  return (
    <>
      <Header />
      <LoginSection>
        <loginBox>
          <LoginTitle>Welcome<br/>Matching42!<br/></LoginTitle>
          <Description>
            아래 로그인 버튼을 눌러 시작해보세요!<br/>
            현재 <P>260명</P>의 카뎃이 이용하고 있습니다.<br/>

            혹시 알아요? <P>Matching42</P>에서 <P>인생 동료</P>를 만날지!<br/>
          </Description>
          <ClickButton>로그인</ClickButton>
        </loginBox>
      </LoginSection>
    </>
  );
};

const P = styled.div`
  font-weight = bold;
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