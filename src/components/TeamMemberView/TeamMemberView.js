import React, { useState } from 'react';
import { api } from '../../api';
import { ReactComponent as LockIcon } from '../../assets/icons/icon-lock.svg';
import { ReactComponent as UnlockIcon } from '../../assets/icons/icon-unlock.svg';
import { TeamMemberViewStyled, TeamMemberViewTop } from './TeamMemberView.styles';
import TeamMemberImage from './TeamMemberImage/TeamMemberImage';
import { useFetchTeamListData } from '../../hooks/useTeamListData';

const TeamMemberView = ({ user, teamData, userDataMutate }) => {
  const [team, setTeam] = useState(teamData);
  const teamMember = [team.leaderID, ...team.memberID];
  const { teamListData } = useFetchTeamListData();

  const changeTeamState = async () => {
    if (teamMember.length === 5 || user.ID !== team.leaderID || team.state === 'end') return;

    let changeState;

    if (teamMember.length < 3) {
      changeState = team.state === 'less_member' ? 'wait_member' : 'less_member';
    } else {
      changeState = 'progress';
    }

    await api
      .patch(`team/${team.ID}`, { state: changeState })
      .then(res => setTeam(res.data.team))
      .catch(error => console.log(error));
    teamListData.mutate();
    userDataMutate();
  };

  return (
    <TeamMemberViewStyled>
      <TeamMemberViewTop>
        <TeamMemberViewTop.Wrap>
          <TeamMemberViewTop.Title>Member</TeamMemberViewTop.Title>
          <TeamMemberViewTop.Description>현재 멤버를 모집하고 {team.state === 'wait_member' ? '있습니다.' : '있지 않습니다.'}</TeamMemberViewTop.Description>
        </TeamMemberViewTop.Wrap>
        <TeamMemberViewTop.Lock onClick={changeTeamState} isLeader={localStorage.user === team.leaderID} end={team.state === 'end'}>
          {team.state === 'wait_member' ? <UnlockIcon /> : <LockIcon />}
        </TeamMemberViewTop.Lock>
      </TeamMemberViewTop>
      <TeamMemberImage teamMember={teamMember} />
    </TeamMemberViewStyled>
  );
};

export default TeamMemberView;
