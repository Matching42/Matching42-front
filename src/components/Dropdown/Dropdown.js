import React, { useState } from 'react';
import { DropdownStyled, DropdownButton, DropdownBox } from './Dropdown.styles';

const Dropdown = ({ subjectList }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedSubject, setSubject] = useState('Libft');

  const buttonOnClick = e => {
    setIsActive(!isActive);
  };

  const subjectOnClick = event => {
    setIsActive(!isActive);
    setSubject(event.target.innerHTML);
  };

  return (
    <DropdownStyled>
      <DropdownButton type="button" onClick={buttonOnClick}>
        Subject
      </DropdownButton>
      <DropdownBox active={isActive}>
        {subjectList.map((subjects, circle) => (
          <DropdownBox.List key={circle}>
            <DropdownBox.List.Title>{circle} Circle</DropdownBox.List.Title>
            {subjects.map((subject, index) => (
              <DropdownBox.Item key={index} onClick={subjectOnClick} selected={subject === selectedSubject}>
                {subject}
              </DropdownBox.Item>
            ))}
          </DropdownBox.List>
        ))}
      </DropdownBox>
    </DropdownStyled>
  );
};

export default Dropdown;
