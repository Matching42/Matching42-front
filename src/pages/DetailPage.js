import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import TeamMemberView from '../components/TeamMemberView/TeamMemberView';
import TeamProfileView from '../components/TeamProfileView/TeamProfileView';
import TeamWorkspaceView from '../components/TeamWorkspaceView/TeamWorkspaceView';

const dummy = {
	ID: 1,
	leaderID: 'jiwonlee',
	memberID: ['seomoon', 'sulee', 'jongkim'],
	tags: ['낮', '온라인', '매일 2시간', 'pdf 숙지', '비대면', '모각코'],
	subject: 'cub3d',
	state: 'wait_member',
	notionLink: '',
	gitLink: '',
	teamName: '1번팀',
	startDate: '2021-05-27'
};

const DetailPage = () => {
  console.log('detail page');

  return (
    <>
      <Header user="jiwonlee" />
      <DetailContainer>
        <DetailContainer.Section>
          <DetailContainer.Top>
            <TeamProfileView />
            <TeamMemberView state={dummy.state} teamMember={[dummy.leaderID, ...dummy.memberID]}/>
          </DetailContainer.Top>
          <DetailContainer.Bottom>
            <TeamWorkspaceView />
          </DetailContainer.Bottom>
        </DetailContainer.Section>
      </DetailContainer>
    </>
  );
};

DetailPage.defaultProps = {
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
