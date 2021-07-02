import React from 'react';
import styled from 'styled-components';
import { OverlayProvider } from '@react-aria/overlays';
import TeamMemberView from '../components/TeamMemberView/TeamMemberView';
import TeamProfileView from '../components/TeamProfileView/TeamProfileView';
import TeamWorkspaceView from '../components/TeamWorkspaceView/TeamWorkspaceView';
import { useUserData } from '../hooks/useUserData';

const DetailPage = props => {
  const { user, team } = props;
  const { getUserData } = useUserData(user);

  if (getUserData.error) {
    return <Loading>에러 발생!</Loading>;
  }

  if (getUserData.data === null) {
    return <Loading>로딩중!</Loading>;
  }

  return (
    <>
      <OverlayProvider>
        <DetailContainer>
          <DetailContainer.Section>
            <DetailContainer.Top>
              <TeamProfileView team={team} />
              <TeamMemberView team={team} user={getUserData.data} />
            </DetailContainer.Top>
            <DetailContainer.Bottom>
              <TeamWorkspaceView />
            </DetailContainer.Bottom>
          </DetailContainer.Section>
        </DetailContainer>
      </OverlayProvider>
    </>
  );
};

DetailPage.defaultProps = {
  team: {
    ID: 1,
    leaderID: 'jiwonlee',
    memberID: ['seomoon', 'sulee', 'jongkim'],
    tags: ['매일2시간', '매일2시간', '매일2시간', '매일2시간'],
    subject: 'cub3d',
    state: 'wait_member',
    notionLink: '',
    gitLink: '',
    teamName: 'Cub3d Team',
    startDate: new Date(2021, 4, 20)
  }
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
  justify-content: center;
  align-items: center;
`;
