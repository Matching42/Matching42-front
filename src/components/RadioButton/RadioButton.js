import React, { useCallback } from 'react';
import { RadioButtonStyled, RadioInput, CheckRadioButton } from './RadioButton.styles';

const RadioButton = ({ name, checkRadioButton, setCheckRadioButton }) => {
  const handleChangeInput = useCallback(
    e => {
      setCheckRadioButton(e.target.value);
    },
    [setCheckRadioButton]
  );

  return (
    <RadioButtonStyled>
      <RadioInput>
        <CheckRadioButton type="radio" value={name} checked={name === checkRadioButton} onChange={handleChangeInput} />
        <span>{name}</span>
      </RadioInput>
    </RadioButtonStyled>
  );
};

export default RadioButton;
