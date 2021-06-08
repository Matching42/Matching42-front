import React, { useState } from 'react';
import { DropdownStyled, DropdownButton, DropdownBox } from './Dropdown.styles';

const Dropdown = ({ subjectList }) => {
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
        {subjectList.map((subjects, circle) => (
          <DropdownBox.List key={circle}>
            <DropdownBox.List.Title>{circle} Circle</DropdownBox.List.Title>
            {subjects.map((subject, index) => (
              <DropdownBox.Item key={index} onClick={subjectOnClick}>
                {subject}
              </DropdownBox.Item>
            ))}
          </DropdownBox.List>
        ))}
      </DropdownBox>
    </DropdownStyled>
  );
};

Dropdown.defaultProps = {
  subjectList: [
    ['Libft', 'Born2beroot', 'get_next_line', 'ft_printf'],
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
  ]
};

export default Dropdown;
