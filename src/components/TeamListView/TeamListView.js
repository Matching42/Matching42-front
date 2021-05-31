import React, { useState, useEffect, useRef } from 'react';
import { TeamListViewStyled, TeamListTopbar, TeamListContainer } from './TeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';
import Dropdown from '../Dropdown/Dropdown';
import ToggleButton from '../ToggleButton/ToggleButton';

const TeamListView = ({ teamList, onMoreTeamListItem, projects, totalSize }) => {
  const [target, setTarget] = useState(null);

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
          <Dropdown projects={projects} />
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

TeamListView.defaultProps = {
  projects: [
    { id: 1, Name: 'libft' },
    { id: 2, Name: 'get-next-line' },
    { id: 3, Name: 'printf' },
    { id: 4, Name: 'netwhat' },
    { id: 5, Name: 'ft_server' },
    { id: 6, Name: 'cub3d' },
    { id: 7, Name: 'mini_rt' }
  ]
};

export default TeamListView;
