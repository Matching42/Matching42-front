import React from 'react';
import { useTeamData } from '../../hooks/useUserData';
import { MyTeamListViewStyled, Topbar } from './MyTeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const MyTeamListView = ({ myTeamList }) => {
  const { getTeamData } = useTeamData(myTeamList);
  const teamData = getTeamData.data;

  return (
    <MyTeamListViewStyled>
      <Topbar>My Team</Topbar>
      {teamData ? <TeamListItem teamData={teamData} /> : <LoaderSpinner />}
    </MyTeamListViewStyled>
  );
};

export default MyTeamListView;
