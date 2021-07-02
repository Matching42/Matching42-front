import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { OverlayProvider } from '@react-aria/overlays';
import TeamMemberView from '../components/TeamMemberView/TeamMemberView';
import TeamProfileView from '../components/TeamProfileView/TeamProfileView';
import TeamWorkspaceView from '../components/TeamWorkspaceView/TeamWorkspaceView';
import LoaderSpinner from '../components/LoaderSpinner/LoaderSpinner';
import { useUserData, useTeamData } from '../hooks/useUserData';
import { api } from '../api';

const DetailPage = ({ user, history }) => {
  const currentParams = useParams();
  const currentId = currentParams.id;
  const { getUserData } = useUserData(user);
  const { getTeamData } = useTeamData(currentId);

  const handleFinishedButtonClick = async () => {
    await api
      .patch(`/team/${getTeamData.data?.data?.ID}`, {
        state: 'end'
      })
      .then(res => console.log(res))
      .catch(error => console.warn(error));
    history.goBack();
  };

  if (getUserData.error) {
    return (
      <Loading>
        <Loading.Strong>앗!</Loading.Strong>
        <Loading.Text>에러가 발생했어요! 잠시 후 다시 시도해주세요.</Loading.Text>
      </Loading>
    );
  }

  if (getUserData.data === null || getTeamData.data === null || getTeamData.data?.data === null || getTeamData.data?.data === undefined) {
    return (
      <Loading>
        <LoaderSpinner />
      </Loading>
    );
  }

  const handleTeamProfileEditButtonClick = (teamName, teamDescription, teamTags) => {
    console.log(teamName);
    console.log(teamDescription);
    console.log(teamTags);
  };

  return (
    <>
      <OverlayProvider>
        <DetailContainer>
          <DetailContainer.Section>
            <DetailContainer.Top>
              <TeamProfileView team={getTeamData.data?.data} user={getUserData.data?.data} onTeamProfileEditButtonclick={handleTeamProfileEditButtonClick} />
              <TeamMemberView teamData={getTeamData.data?.data} user={getUserData.data?.data} userDataMutate={getUserData.mutate} />
            </DetailContainer.Top>
            <DetailContainer.Bottom>
              <TeamWorkspaceView team={getTeamData.data?.data} onFinishedButtonClick={handleFinishedButtonClick} />
            </DetailContainer.Bottom>
          </DetailContainer.Section>
        </DetailContainer>
      </OverlayProvider>
    </>
  );
};

export default DetailPage;

export const DetailContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

DetailContainer.Section = styled.div`
  width: 80%;
  min-width: 1000px;
  height: 100%;
  min-height: 500px;
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
