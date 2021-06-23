import React from 'react';
import styled from 'styled-components';
import { OverlayProvider } from '@react-aria/overlays';
import ProfileView from '../components/ProfileView/ProfileView';
import MyTeamListView from '../components/MyTeamListView/MyTeamListView';
import MatchingStateView from '../components/MatchingStateView/MatchingStateView';
import AllTeamListView from '../components/TeamListView/TeamListView';
import { useFetchTeamListData } from '../hooks/useTeamListData';
import { useUserData } from '../hooks/useUserData';

const MainPage = props => {
  const { user, waitList, subjectList, totalSize } = props;
  const { getUserData }= useUserData(user);
  const { teams, teamListData } = useFetchTeamListData();

  if (getUserData.error) {
    return <Loading>에러 발생!</Loading>;
  }

  if (getUserData.data === null || getUserData.data === undefined) {
    return <Loading>로딩중!</Loading>;
  }

  return (
    <OverlayProvider>
      <MainContainer>
        <MainContainer.Section>
          <MainContainer.Left>
            <ProfileView user={getUserData.data} />
            <MyTeamListView myTeamList={getUserData.data.teamID} />
          </MainContainer.Left>
          <MainContainer.Right>
            <MatchingStateView user={getUserData.data} waitList={waitList} />
            <AllTeamListView teamList={teams} onMoreTeamListItem={teamListData.setSize} totalSize={totalSize} subjectList={subjectList} />
          </MainContainer.Right>
        </MainContainer.Section>
      </MainContainer>
    </OverlayProvider>
  );
};

MainPage.defaultProps = {
  waitList: {
    size: 30,
    cub3d: ['hokim', 'hyeokim', 'jiwonlee', 'jongkim', 'kwlee', 'minjakim', 'seolim', 'seomoon', 'snpark', 'sulee'],
    printf: ['hokim', 'hyeokim', 'jiwonlee', 'jongkim', 'kwlee', 'minjakim', 'seolim', 'seomoon', 'snpark', 'sulee'],
    libasm: ['hokim', 'hyeokim', 'jiwonlee', 'jongkim', 'kwlee', 'minjakim', 'seolim', 'seomoon', 'snpark', 'sulee']
  },
  totalSize: 53,
};

export default MainPage;

export const MainContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

MainContainer.Section = styled.div`
  width: 80%;
  min-width: 1000px;
  height: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

MainContainer.Left = styled.div`
  width: 39%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

MainContainer.Right = styled.div`
  width: 59%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
