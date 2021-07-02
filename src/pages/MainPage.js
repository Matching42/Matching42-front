import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { OverlayProvider } from '@react-aria/overlays';
import ProfileView from '../components/ProfileView/ProfileView';
import MyTeamListView from '../components/MyTeamListView/MyTeamListView';
import MatchingStateView from '../components/MatchingStateView/MatchingStateView';
import AllTeamListView from '../components/TeamListView/TeamListView';
import LoaderSpinner from '../components/LoaderSpinner/LoaderSpinner';
import { useFetchTeamListData } from '../hooks/useTeamListData';
import { useUserData } from '../hooks/useUserData';
import { useStateData } from '../hooks/useStateData';
import { api } from '../api';

const MainPage = props => {
  const { user, waitList, subjectList, totalSize } = props;
  const [subject, setSubject] = useState('Subject');
  const { getUserData } = useUserData(user);
  const { getMatchingStateData } = useStateData();
  const { teams, teamListData } = useFetchTeamListData(subject);

  useEffect(() => {
    teamListData.revalidate();
  }, [teamListData]);

  const handleMatchingButtonClick = async (selectedSubject, githubId, preferredCluster) => {
    await api
      .post('/waitlist/', {
        userID: user,
        subjectName: selectedSubject,
        gitName: githubId,
        cluster: preferredCluster
      })
      .then(res => console.log(res))
      .catch(error => console.warn(error));
    getUserData.mutate();
    getMatchingStateData.mutate();
  };

  const handleMatchingCancelButtonClick = async () => {
    await api
      .delete(`/waitlist/${user}`)
      .then(res => console.log(res))
      .catch(error => console.warn(error));
    getUserData.mutate();
    getMatchingStateData.mutate();
  };

  const handleSelectedSubjectButtonClick = selectedSubject => {
    setSubject(selectedSubject);
  };

  if (getUserData.error) {
    return (
      <Loading>
        <Loading.Strong>앗!</Loading.Strong>
        <Loading.Text>에러가 발생했어요! 잠시 후 다시 시도해주세요.</Loading.Text>
      </Loading>
    );
  }

  if (getUserData.data === null || getUserData.data?.data === null || getUserData.data?.data === undefined || getMatchingStateData.data === null || getMatchingStateData.data === undefined) {
    return (
      <Loading>
        <LoaderSpinner />
      </Loading>
    );
  }

  return (
    <OverlayProvider>
      <MainContainer>
        <MainContainer.Section>
          <MainContainer.Left>
            <ProfileView user={getUserData.data.data} />
            <MyTeamListView myTeamList={getUserData.data.data.teamID} />
          </MainContainer.Left>
          <MainContainer.Right>
            <MatchingStateView user={getUserData.data.data} waitList={waitList} onMatchingButtonClick={handleMatchingButtonClick} onMatchingCancelButtonClick={handleMatchingCancelButtonClick} />
            <AllTeamListView
              teamList={teams}
              teamListData={teamListData.data}
              onMoreTeamListItem={teamListData.setSize}
              totalSize={totalSize}
              subjectList={subjectList}
              onSelectedSubjectButtonClick={handleSelectedSubjectButtonClick}
            />
          </MainContainer.Right>
        </MainContainer.Section>
      </MainContainer>
    </OverlayProvider>
  );
};

MainPage.defaultProps = {
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

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #252831;
`;

Loading.Strong = styled.p`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 20px;
`;

Loading.Text = styled.p`
  font-size: 0.4em;
`;
