import React, { useState } from 'react';
import { DropdownStyled, DropdownButton, DropdownBox } from './Dropdown.styles';

const Dropdown = ({ projects }) => {
  const [isActive, setIsActive] = useState(false);

  const buttonOnClick = e => {
    e.stopPropagation(); // 서브젝트 선택으로도 드롭다운 닫히게 하고 싶다면 제거
    setIsActive(!isActive);
  };

  const subjectOnClick = event => {
    console.log(event.innerHtml);
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
