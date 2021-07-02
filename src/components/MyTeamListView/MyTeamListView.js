import React from 'react';
import { useTeamData } from '../../hooks/useUserData';
import { MyTeamListViewStyled, Topbar, NoneMyTeamData } from './MyTeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const MyTeamListView = ({ myTeamList }) => {
  const { getTeamData } = useTeamData(myTeamList);

  if (getTeamData.data === null || getTeamData.data?.data === null || getTeamData.data?.data === undefined) {
    return (
      <MyTeamListViewStyled>
        <Topbar>My Team</Topbar>
        <LoaderSpinner />
      </MyTeamListViewStyled>
    );
  }

  return (
    <MyTeamListViewStyled>
      <Topbar>My Team</Topbar>
      {getTeamData.data.data ? <TeamListItem teamData={getTeamData.data.data} /> : <NoneMyTeamData>아직 참여중인 팀이 없습니다.</NoneMyTeamData>}
    </MyTeamListViewStyled>
  );
};

export default MyTeamListView;
