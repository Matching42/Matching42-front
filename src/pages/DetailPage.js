import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { OverlayProvider } from '@react-aria/overlays';
import TeamMemberView from '../components/TeamMemberView/TeamMemberView';
import TeamProfileView from '../components/TeamProfileView/TeamProfileView';
import TeamWorkspaceView from '../components/TeamWorkspaceView/TeamWorkspaceView';
import Toast from '../components/Toast/Toast';
import { LoaderSpinner } from '../components/Loader/Loader';
import { useUserData, useTeamData } from '../hooks/useUserData';
import { useFetchTeamListData } from '../hooks/useTeamListData';
import { api } from '../api';

const DetailPage = ({ user, history }) => {
  const currentParams = useParams();
  const currentId = currentParams.id;
  const { getUserData } = useUserData(user);
  const { getTeamData } = useTeamData(currentId);
  const { teamListData } = useFetchTeamListData();
  const [isActive, setIsActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFinishedButtonClick = async () => {
    await api
      .patch(`/team/${getTeamData.data?.data?.ID}`, {
        state: 'end'
      })
      .then(res => {
        console.log(res);
        history.goBack();
      })
      .catch(error => {
        const response = error.response.data;
        console.warn(error);
        setErrorMessage(response.error.message);
        setIsActive(true);
      });
  };

  const handleTeamProfileEditButtonClick = async (_teamName, teamDescription, teamTags) => {
    await api
      .patch(`/team/${getTeamData.data?.data?.ID}`, {
        teamName: _teamName,
        description: teamDescription
      })
      .then(res => console.log(res))
      .catch(error => {
        const response = error.response.data;
        console.warn(error);
        setErrorMessage(response.error.message);
        setIsActive(true);
      });

    await api
      .patch(`/team/tag/${getTeamData.data?.data?.ID}`, {
        tag: teamTags
      })
      .then(res => console.log(res))
      .catch(error => {
        const response = error.response.data;
        console.warn(error);
        setErrorMessage(response.error.message);
        setIsActive(true);
      });

    getTeamData.mutate();
    teamListData.mutate();
  };

  const handleInviteButtonClick = async () => {
    await api
      .post(`/team/invitetorepo/${getTeamData.data?.data?.ID}/${user}`)
      .then(res => console.log(res))
      .catch(error => {
        const response = error.response.data;
        console.warn(error);
        setErrorMessage(response.error.message);
        setIsActive(true);
      });
  };

  if (getUserData.error || getTeamData.error || teamListData.error) {
    return (
      <Loading>
        <Loading.Strong>앗!</Loading.Strong>
        <Loading.Text>에러가 발생했어요! 잠시 후 다시 시도해주세요.</Loading.Text>
      </Loading>
    );
  }

  if (!getUserData.data?.user || !getTeamData.data?.data) {
    return (
      <Loading>
        <LoaderSpinner />
      </Loading>
    );
  }

  return (
    <>
      <OverlayProvider>
        <DetailContainer>
          <DetailContainer.Section className='detail_section__responsive'>
            <DetailContainer.Top>
              <TeamProfileView team={getTeamData.data?.data} user={getUserData.data?.user} onTeamProfileEditButtonclick={handleTeamProfileEditButtonClick} />
              <TeamMemberView teamData={getTeamData.data?.data} teamDataMutate={getTeamData.mutate} user={getUserData.data?.user} userDataMutate={getUserData.mutate} />
            </DetailContainer.Top>
            <DetailContainer.Bottom>
              <TeamWorkspaceView
                team={getTeamData.data?.data}
                user={getUserData.data?.user}
                onFinishedButtonClick={handleFinishedButtonClick}
                onInviteButtonClick={handleInviteButtonClick}
                teamDataMutate={getTeamData.mutate}
              />
            </DetailContainer.Bottom>
          </DetailContainer.Section>
          {isActive && <Toast setIsActive={setIsActive} type="error" message={errorMessage} />}
        </DetailContainer>
      </OverlayProvider>
    </>
  );
};

export default DetailPage;

export const DetailContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 17rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12rem;
`;

DetailContainer.Section = styled.div`
  width: 80%;
  min-width: 100rem;
  height: 100%;
  min-height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

DetailContainer.Top = styled.div`
  width: 100%;
  height: 38%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

DetailContainer.Bottom = styled.div`
  width: 100%;
  height: 58%;
  display: flex;
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
  margin-bottom: 2rem;
`;

Loading.Text = styled.p`
  font-size: 0.4em;
`;
