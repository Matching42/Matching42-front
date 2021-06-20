import React, { useState, useEffect, useRef } from 'react';
import { TeamListViewStyled, TeamListTopbar, TeamListContainer } from './TeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';
import Dropdown from '../Dropdown/Dropdown';
import ToggleButton from '../ToggleButton/ToggleButton';

const TeamListView = ({ teamList, onMoreTeamListItem, totalSize }) => {
  const [target, setTarget] = useState(null);
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
          <ToggleButton />
        </TeamListTopbar.Button>
      </TeamListTopbar>
      <TeamListContainer>
        {teamList?.map((team, index) => (
          <TeamListItem key={index} teamData={team} />
        ))}
        {teamList && <div ref={setTarget} style={{ height: '10px' }} />}
      </TeamListContainer>
      <div className="scrollbar" />
    </TeamListViewStyled>
  );
};

export default TeamListView;
