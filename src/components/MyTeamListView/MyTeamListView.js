import React from 'react';
import { MyTeamListViewStyled, Topbar, NoneMyTeamData } from './MyTeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';

const MyTeamListView = ({ teamList }) => (
  <MyTeamListViewStyled>
    <Topbar>My Team</Topbar>
    {teamList.length ? teamList.map((team, index) => <TeamListItem type="myTeamList" key={index} teamData={team} />) : <NoneMyTeamData>아직 참여중인 팀이 없습니다.</NoneMyTeamData>}
  </MyTeamListViewStyled>
);

export default MyTeamListView;
