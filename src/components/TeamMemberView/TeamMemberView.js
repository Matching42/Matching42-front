import React, { useState } from 'react';
import { ReactComponent as LockIcon } from '../../assets/icons/icon-lock.svg';
import { ReactComponent as UnlockIcon } from '../../assets/icons/icon-unlock.svg';
import { TeamMemberViewStyled, TeamMemberViewTop } from './TeamMemberView.styles';
import TeamMemberImage from './TeamMemberImage/TeamMemberImage';

const TeamMemberView = ({ user, team }) => {
  const teamMember = [team.leaderID, ...team.memberID];
  const condition = teamMember.length !== 5 && team.state === 'wait_member'; // post 구현되면 삭제
  const [teamState, setTeamState] = useState(condition); // post 구현되면 삭제

  const changeTeamState = () => {
    if (teamMember.length === 5 || user?.ID !== team.leaderID) return;
    setTeamState(!teamState); // post 구현되면 삭제
  };

  // post 구현되면 teamState 대신 team.state === "wait_member"로 변경
  return (
    <TeamMemberViewStyled>
      <TeamMemberViewTop>
        <TeamMemberViewTop.Wrap>
          <TeamMemberViewTop.Title>Member</TeamMemberViewTop.Title>
          <TeamMemberViewTop.Description>현재 멤버를 모집하고 {teamState ? '있습니다.' : '있지 않습니다.'}</TeamMemberViewTop.Description>
        </TeamMemberViewTop.Wrap>
        <TeamMemberViewTop.Lock onClick={changeTeamState}>{teamState ? <UnlockIcon /> : <LockIcon />}</TeamMemberViewTop.Lock>
      </TeamMemberViewTop>
      <TeamMemberImage teamMember={teamMember} />
    </TeamMemberViewStyled>
  );
};

export default TeamMemberView;
