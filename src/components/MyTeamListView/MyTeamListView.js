import React from 'react';
import { useTeamData } from '../../hooks/useUserData';
import { MyTeamListViewStyled, Topbar, NoneMyTeamData } from './MyTeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const MyTeamListView = ({ myTeamList }) => {
  const { getTeamData } = useTeamData(myTeamList);

  const checkLoading = () => {
    const isLoading = getTeamData.data?.data === undefined;

    if (isLoading) return <LoaderSpinner />;
    return getTeamData.data.data ? <TeamListItem teamData={getTeamData.data.data} /> : <NoneMyTeamData>아직 참여중인 팀이 없습니다.</NoneMyTeamData>;
  };

  return (
    <MyTeamListViewStyled>
      <Topbar>My Team</Topbar>
      {checkLoading()}
    </MyTeamListViewStyled>
  );
};

export default MyTeamListView;
