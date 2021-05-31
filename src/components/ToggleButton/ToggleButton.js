import React, { useState } from 'react';
import { WaitToggleStyled, WaitSpanStyled, ToggleStyled, WaitToggleButtonStyled } from './ToggleButton.styles';

const WaitToggleButton = () => {
  const [toggle, setToggle] = useState(true);

  const onClick = () => {
    setToggle(toggle => !toggle);
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
