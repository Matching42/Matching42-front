import React from 'react';
import { useTeamData } from '../../hooks/useUserData';
import { MyTeamListViewStyled, Topbar, NoneMyTeamData } from './MyTeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';
import { LoaderSpinner } from '../Loader/Loader';

const MyTeamListView = ({ myTeamList }) => {
  const { getTeamData } = useTeamData(myTeamList);


  const checkLoading = () => {
    const isLoading = getTeamData.data?.data === undefined;
    if (isLoading && myTeamList) return <LoaderSpinner />;
    return (myTeamList === null) ? <NoneMyTeamData>아직 참여중인 팀이 없습니다.</NoneMyTeamData> : <TeamListItem type="myTeamList" teamData={getTeamData.data?.data} />
  };

  return (
    <MyTeamListViewStyled>
      <Topbar>My Team</Topbar>
      {checkLoading()}
    </MyTeamListViewStyled>
  );
};

export default MyTeamListView;
