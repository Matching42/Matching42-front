import React from 'react';
import { api } from '../../api';
import { ReactComponent as LockIcon } from '../../assets/icons/icon-lock.svg';
import { ReactComponent as UnlockIcon } from '../../assets/icons/icon-unlock.svg';
import { TeamMemberViewStyled, TeamMemberViewTop } from './TeamMemberView.styles';
import TeamMemberImage from './TeamMemberImage/TeamMemberImage';
import { useFetchTeamListData } from '../../hooks/useTeamListData';

const TeamMemberView = ({ user, teamData, userDataMutate, teamDataMutate }) => {
  const { teamListData } = useFetchTeamListData();

  const changeTeamState = async () => {
    if (teamData.memberID.length === 5 || user.ID !== teamData.leaderID || teamData.state === 'end') return;

    let changeState;

    if (teamData.memberID.length < 5) {
      changeState = teamData.state === 'less_member' ? 'wait_member' : 'less_member';
    } else {
      changeState = 'progress';
    }

    await api
      .patch(`team/${teamData.ID}`, { state: changeState })
      .then(() => teamDataMutate())
      .catch(error => console.log(error));
    teamListData.mutate();
    userDataMutate();
  };

  return (
    <TeamMemberViewStyled>
      <TeamMemberViewTop>
        <TeamMemberViewTop.Wrap>
          <TeamMemberViewTop.Title>Member</TeamMemberViewTop.Title>
          <TeamMemberViewTop.Description>현재 멤버를 모집하고 {teamData.state === 'wait_member' ? '있습니다.' : '있지 않습니다.'}</TeamMemberViewTop.Description>
        </TeamMemberViewTop.Wrap>
        <TeamMemberViewTop.Lock onClick={changeTeamState} isLeader={localStorage.user === teamData.leaderID} checkEnd={teamData.state === 'end'}>
          {teamData.state === 'wait_member' ? <UnlockIcon /> : <LockIcon />}
        </TeamMemberViewTop.Lock>
      </TeamMemberViewTop>
      <TeamMemberImage teamMember={teamData.memberID} />
    </TeamMemberViewStyled>
  );
};

export default TeamMemberView;
