import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { OverlayProvider } from '@react-aria/overlays';
import ProfileView from '../components/ProfileView/ProfileView';
import MyTeamListView from '../components/MyTeamListView/MyTeamListView';
import MatchingStateView from '../components/MatchingStateView/MatchingStateView';
import AllTeamListView from '../components/TeamListView/TeamListView';
import Toast from '../components/Toast/Toast';
import { LoaderSpinner } from '../components/Loader/Loader';
import { useFetchTeamListData } from '../hooks/useTeamListData';
import { useUserData, useTeamData } from '../hooks/useUserData';
import { useStateData } from '../hooks/useStateData';
import { api } from '../api';

const MainPage = props => {
  const { user, waitList, subjectList } = props;
  const [subject, setSubject] = useState('Subject');
  const [isActive, setIsActive] = useState(false);
  const { getUserData } = useUserData(user, setIsActive);
  const { getMatchingStateData } = useStateData();
  const { teams, teamListData, isValidating } = useFetchTeamListData(subject);
  const { getTeamData } = useTeamData();
  const [responseStatus, setResponseStatus] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleMatchingButtonClick = async (selectedSubject, githubId, preferredCluster, submissionDeadline) => {
    await api
      .post('/waitlist/', {
        userID: user,
        subjectName: selectedSubject,
        gitName: githubId,
        cluster: preferredCluster,
        deadline: submissionDeadline
      })
      .then(res => {
        console.log(res);
        setResponseStatus(200);
      })
      .catch(error => {
        console.warn(error);
        setIsActive(!isActive);
        setErrorMessage(error.message);
        setResponseStatus(400);
      });
    getUserData.mutate();
    getMatchingStateData.mutate();
  };

  const handleMatchingCancelButtonClick = async () => {
    await api
      .delete(`/waitlist/${user}`)
      .then(res => console.log(res))
      .catch(error => {
        console.warn(error);
        setErrorMessage(error.message);
        setIsActive(!isActive);
      });
    getUserData.mutate();
    getMatchingStateData.mutate();
  };

  const handleSelectedSubjectButtonClick = selectedSubject => {
    setSubject(selectedSubject);
  };

  if (getUserData.error || getMatchingStateData.error || teamListData.error || getTeamData.error) {
    return (
      <Loading>
        <Loading.Strong>앗!</Loading.Strong>
        <Loading.Text>에러가 발생했어요! 잠시 후 다시 시도해주세요.</Loading.Text>
      </Loading>
    );
  }

  if ((getUserData.data === null || getUserData.data?.user === undefined || getMatchingStateData.data === null || getMatchingStateData.data === undefined) && !isActive) {
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
            <ProfileView user={getUserData.data?.user} />
            <MyTeamListView myTeamList={getUserData.data?.user.teamID} />
          </MainContainer.Left>
          <MainContainer.Right>
            <MatchingStateView
              user={getUserData.data?.user}
              waitList={waitList}
              onMatchingButtonClick={handleMatchingButtonClick}
              onMatchingCancelButtonClick={handleMatchingCancelButtonClick}
              responseStatus={responseStatus}
              setResponseStatus={setResponseStatus}
            />
            <AllTeamListView
              teamList={teams}
              teamListData={teamListData?.data}
              onMoreTeamListItem={teamListData?.setSize}
              isValidating={isValidating}
              totalSize={getTeamData.data?.data.filter(team => team.state !== 'end').length}
              subjectList={subjectList}
              onSelectedSubjectButtonClick={handleSelectedSubjectButtonClick}
            />
          </MainContainer.Right>
        </MainContainer.Section>
        <Toast isActive={isActive} setIsActive={setIsActive} type="error" message={errorMessage} />
      </MainContainer>
    </OverlayProvider>
  );
};

export default MainPage;

export const MainContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 17rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12rem;
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
  font-size: 4rem;
`;

Loading.Strong = styled.p`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 20px;
`;

Loading.Text = styled.p`
  font-size: 0.4em;
`;
