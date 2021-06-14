import React, { useState, useEffect, useRef } from 'react';
import { TeamListViewStyled, TeamListTopbar, TeamListContainer } from './TeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';
import Dropdown from '../Dropdown/Dropdown';
import ToggleButton from '../ToggleButton/ToggleButton';

const TeamListView = ({ teamList, onMoreTeamListItem, subjectList, totalSize }) => {
  const [target, setTarget] = useState(null);
  const [teams, setTeams] = useState(teamList);

  const observer = useRef(
    new IntersectionObserver(
      entires => {
        const first = entires[0];
        if (first.isIntersecting) {
          onMoreTeamListItem(size => size + 1);
        }
      },
      {
        threshold: 0.5
      }
    )
  );

  useEffect(() => {
    const currentElement = target;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [target]);

  return (
    <TeamListViewStyled>
      <TeamListTopbar>
        <TeamListTopbar.Title>
          Team List
          <TeamListTopbar.SubTitle>{totalSize}건</TeamListTopbar.SubTitle>
        </TeamListTopbar.Title>
        <TeamListTopbar.Button>
          <Dropdown subjectList={subjectList} />
          <ToggleButton teamList={teamList} setTeams={setTeams} />
        </TeamListTopbar.Button>
      </TeamListTopbar>
      <TeamListContainer>
        {teams?.map((team, index) => (
          <TeamListItem key={index} teamData={team} />
        ))}
        {teams && <div ref={setTarget} style={{ height: '10px' }} />}
      </TeamListContainer>
      <div className="scrollbar" />
    </TeamListViewStyled>
  );
};

export default TeamListView;
