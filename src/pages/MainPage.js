import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import LoginSectionView from '../components/LoginSectionView/LoginSectionView';
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
          <loginTitle>Welcome<br/>Matching42!<br/></loginTitle>
          <description>
            아래 로그인 버튼을 눌러 시작해보세요!<br/>
            현재 <b>260명</b>의 카뎃이 이용하고 있습니다.<br/>

            혹시 알아요? <b>Matching42</b>에서 <b>인생 동료</b>를 만날지!<br/>
          </description>
          <clickButton>로그인</clickButton>
        </loginBox>
      </LoginSection>
    </>
  );
};

export const LoginSection = styled.div`
  width: 100vw;
  height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

export const clickButton = styled.div`
	font-size: 1.375rem;
	background: #0bd;
	color: #fff;
	border-radius: 5px;
	padding: 18px 32px;
`;

export default MainPage;