import React, { useState, useEffect, useRef } from 'react';
import { TeamListViewStyled, TeamListTopbar, TeamListContainer, NoneTeamListData } from './TeamListView.styles';
import TeamListItem from '../TeamListItem/TeamListItem';
import Dropdown from '../Dropdown/Dropdown';
import ToggleButton from '../ToggleButton/ToggleButton';
import { LoaderSpinner, LoaderBubble } from '../Loader/Loader';

const TeamListView = ({ teamList, teamListData, onMoreTeamListItem, isValidating, totalSize, onSelectedSubjectButtonClick }) => {
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

  useEffect(() => {
    onSelectedSubjectButtonClick?.(selectedSubject);
  }, [selectedSubject]);

  return (
    <TeamListViewStyled isValidating={isValidating}>
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
      {teamListData === null || teamListData === undefined ? (
        <TeamListContainer>
          <LoaderSpinner />
        </TeamListContainer>
      ) : (
        <TeamListContainer>
          {!teams.length ? <NoneTeamListData>현재 모집중인 팀이 없습니다.</NoneTeamListData> : teams.map((team, index) => <TeamListItem key={index} teamData={team} checkLast={index === teams.length - 1} />)}
          {teams && <div ref={setTarget} style={{ height: '10px' }} />}
        </TeamListContainer>
      )}
      <div className="scrollbar" />
      {isValidating && <LoaderBubble />}
    </TeamListViewStyled>
  );
};

export default TeamListView;
