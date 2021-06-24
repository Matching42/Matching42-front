import React from 'react';
import { useTeamData } from '../../hooks/useUserData';
import { MyTeamListViewStyled, Topbar } from './MyTeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';
import Loader from '../loaderSpinner/loaderSpinner';

const MyTeamListView = ({ myTeamList }) => {
  const { getTeamData } = useTeamData(myTeamList);
  const teamData = getTeamData.data;

  return (
    <MyTeamListViewStyled>
      <Topbar>My Team</Topbar>
      {teamData ? <TeamListItem teamData={teamData} /> : <Loader />}
    </MyTeamListViewStyled>
  );
};

export default MyTeamListView;
