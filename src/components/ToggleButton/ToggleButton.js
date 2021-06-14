import React, { useState } from 'react';
import { WaitToggleStyled, WaitSpanStyled, ToggleStyled, WaitToggleButtonStyled } from './ToggleButton.styles';

const WaitToggleButton = ({ teamList, setTeams }) => {
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(toggle => !toggle);
    let filterTeams = teamList;
    if (toggle)
      filterTeams = teamList.filter(team => team.state === "wait_team");
    console.log(filterTeams);
    setTeams(filterTeams);
  };

  return (
    <WaitToggleStyled>
      <WaitSpanStyled>Wait</WaitSpanStyled>
      <WaitToggleButtonStyled toggle={toggle} onClick={onClick}>
        <ToggleStyled toggle={toggle} />
      </WaitToggleButtonStyled>
    </WaitToggleStyled>
  );
};

export default WaitToggleButton;
