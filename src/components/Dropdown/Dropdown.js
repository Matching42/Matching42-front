import React, { useState } from 'react';
import { DropdownStyled, DropdownButton, DropdownBox } from './Dropdown.styles';
import DropdownIcon from '../../assets/icons/DropdownIcon';

const Dropdown = ({ subjectList, selectedSubject, setSelectedSubject, type }) => {
  const [isActive, setIsActive] = useState(false);

  const buttonOnClick = () => {
    setIsActive(!isActive);
  };

  const subjectOnClick = e => {
    setIsActive(!isActive);
    setSelectedSubject(e.target.innerHTML);
  };

  return (
    <DropdownStyled active={isActive} type={type}>
      <DropdownButton type="button" onClick={buttonOnClick} active={isActive}>
        <DropdownButton.Name>{selectedSubject}</DropdownButton.Name>
        <DropdownButton.ArrowIcon>
          <DropdownIcon color={isActive ? '#27BABB' : '#252831'} active={isActive ? 'translate(1453.069 137.659) rotate(180)' : 'translate(-1439.141 -128.991)'} />
        </DropdownButton.ArrowIcon>
      </DropdownButton>
      <DropdownBox active={isActive} type={type}>
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
      <div className="scrollbar" />
    </DropdownStyled>
  );
};

Dropdown.defaultParameter = {
  subjectList: [
    ['Libft'],
    ['Born2beroot', 'get_next_line', 'ft_printf'],
    ['push_swap', 'minitalk', 'pipex', 'FdF', 'fract-ol', 'Exam Rank 02'],
    ['minishell', 'Inception', 'ft_services', 'Exam Rank 03'],
    [
      'netwhat',
      'cub3d',
      'miniRT',
      'CPP Module 00',
      'CPP Module 01',
      'CPP Module 02',
      'CPP Module 03',
      'CPP Module 04',
      'CPP Module 05',
      'CPP Module 06',
      'CPP Module 07',
      'CPP Module 08',
      'Exam Rank 04'
    ],
    ['webserv', 'ft_irc', 'ft_containers', 'Exam Rank 05'],
    ['ft_transcendence', 'Exam Rank 06']
  ],
  type: 'default'
};

export default Dropdown;
