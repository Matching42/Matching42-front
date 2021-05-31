import React from 'react';
import { MyTeamListViewStyled, Topbar } from './MyTeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';

const MyTeamListView = ({ myTeamList }) => (
  <MyTeamListViewStyled>
    <Topbar>My Team</Topbar>
    {myTeamList ? myTeamList.map((team, index) => <TeamListItem key={index} teamData={team} />) : <p>목록이 없습니다.</p>}
  </MyTeamListViewStyled>
);

export default MyTeamListView;
