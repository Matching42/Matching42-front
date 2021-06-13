import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import ProfileView from '../components/ProfileView/ProfileView';
import MyTeamListView from '../components/MyTeamListView/MyTeamListView';
import MatchingStateView from '../components/MatchingStateView/MatchingStateView';
import AllTeamListView from '../components/TeamListView/TeamListView';
import { useFetchTeamListData } from '../hooks/useTeamListData';

const MainPage = props => {
  const { user, waitList, myTeamList, totalSize } = props;
  const { teams, teamListData } = useFetchTeamListData();

  return (
    <>
      <Header user="jiwonlee" />
      <MainContainer>
        <MainContainer.Section>
          <MainContainer.Left>
            <ProfileView user={user} />
            <MyTeamListView myTeamList={myTeamList} />
          </MainContainer.Left>
          <MainContainer.Right>
            <MatchingStateView user={user} waitList={waitList} />
            <AllTeamListView teamList={teams} onMoreTeamListItem={teamListData.setSize} totalSize={totalSize} />
          </MainContainer.Right>
        </MainContainer.Section>
      </MainContainer>
    </>
  );
};

MainPage.defaultProps = {
  user: {
    userId: 1,
    nickname: 'seomoon',
    level: 4.01,
    blackhole: 28,
    waitMatching: false
  },
  waitList: {
    size: 30,
    cub3d: ['hokim', 'hyeokim', 'jiwonlee', 'jongkim', 'kwlee', 'minjakim', 'seolim', 'seomoon', 'snpark', 'sulee'],
    ft_printf: ['hokim', 'hyeokim', 'jiwonlee', 'jongkim', 'kwlee', 'minjakim', 'seolim', 'seomoon', 'snpark', 'sulee'],
    libasm: ['hokim', 'hyeokim', 'jiwonlee', 'jongkim', 'kwlee', 'minjakim', 'seolim', 'seomoon', 'snpark', 'sulee']
  },
  myTeamList: [
    {
      ID: 1,
      leaderId: 'seolim',
      memberId: ['seolim', 'kwlee', 'snpark'],
      tags: ['낮', '온라인', '매일 2시간'],
      subject: 'cub3d',
      state: 'progress',
      notionLink: '',
      gitLink: '',
      teamName: '1번팀',
      startDate: new Date(2021, 4, 20)
    },
    {
      ID: 2,
      leaderId: 'seolim',
      memberId: ['seolim', 'kwlee', 'snpark'],
      tags: ['낮', '온라인', '매일 2시간'],
      subject: 'cub3d',
      state: 'progress',
      notionLink: '',
      gitLink: '',
      teamName: '1번팀',
      startDate: new Date(2021, 4, 20)
    }
  ],
  totalSize: 53
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
