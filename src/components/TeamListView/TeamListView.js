import React, { useState, useEffect, useRef } from 'react';
import { TeamListViewStyled, TeamListTopbar, TeamListContainer } from './TeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';
import Dropdown from '../Dropdown/Dropdown';
import ToggleButton from '../ToggleButton/ToggleButton';
import Loader from '../loaderSpinner/loaderSpinner';

const TeamListView = ({ teamList, onMoreTeamListItem, totalSize }) => {
  const [target, setTarget] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [teams, setTeams] = useState(teamList);
  const [selectedSubject, setSelectedSubject] = useState('Subject');

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

  useEffect(() => {
    if (toggle) setTeams(teamList.filter(team => team.state === 'wait_member'));
    else setTeams(teamList);
  }, [teamList, toggle]);

  return (
    <TeamListViewStyled>
      <TeamListTopbar>
        <TeamListTopbar.Title>
          Team List
          <TeamListTopbar.SubTitle>{totalSize}건</TeamListTopbar.SubTitle>
        </TeamListTopbar.Title>
        <TeamListTopbar.Button>
          <TeamListTopbar.Dropdown>
            <Dropdown selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
          </TeamListTopbar.Dropdown>
          <ToggleButton toggle={toggle} setToggle={setToggle} />
        </TeamListTopbar.Button>
      </TeamListTopbar>
      <TeamListContainer>
        {!teams.length && <Loader />}
        {teams.map((team, index) => (
          <TeamListItem key={index} teamData={team} />
        ))}
        {teams && <div ref={setTarget} style={{ height: '10px' }} />}
      </TeamListContainer>
      <div className="scrollbar" />
    </TeamListViewStyled>
  );
};

export default TeamListView;
