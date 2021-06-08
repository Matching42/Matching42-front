import React, { useState } from 'react';
import { DropdownStyled, DropdownButton, DropdownBox } from './Dropdown.styles';

const Dropdown = ({ projects }) => {
  const [isActive, setIsActive] = useState(false);

  const buttonOnClick = e => {
    setIsActive(!isActive);
  };

  const subjectOnClick = event => {
    console.log(event.target.innerHTML);
  };

  return (
    <DropdownStyled>
      <DropdownButton type="button" onClick={buttonOnClick}>
        Subject
      </DropdownButton>
      <DropdownBox active={isActive}>
        {projects.map(subject => (
          <div key={subject.id} onClick={subjectOnClick}>
            {subject.Name}
          </div>
        ))}
      </DropdownBox>
    </DropdownStyled>
  );
};

export default Dropdown;
