import React, { useState } from 'react';
import styled from 'styled-components';

export function Dropdown(props) {

	const [isActive, setisActive] = useState(false);

	const buttonOnClick = (e) => {
		e.stopPropagation(); // 서브젝트 선택으로도 드롭다운 닫히게 하고 싶다면 제거
		setisActive(!isActive);
	}

	const subjectOnClick = (event) => {
		console.log(event.innerHtml);
	}

	return (
		<Dropdown.Div>
			<Dropdown.Button type='button' onClick={buttonOnClick}>
				Subject
			</Dropdown.Button>
			<Dropdown.Box active={isActive}>
				{props.dummy.map(subject => <div key={subject.id} onClick={subjectOnClick}>{subject.Name}</div>)}
			</Dropdown.Box>
		</Dropdown.Div>
	);
}

Dropdown.defaultProps = {
	dummy: [
		{id: 1, Name: "libft"},
		{id: 2, Name: "get-next-line"},
		{id: 3, Name: "printf"},
		{id: 4, Name: "netwhat"},
		{id: 5, Name: "ft_server"},
		{id: 6, Name: "cub3d"},
		{id: 7, Name: "mini_rt"},
	]
};

Dropdown.Div = styled.div`
	// display: inline-block;
	cursor: pointer;
`;

Dropdown.Button = styled.button`
	cursor: pointer;
	background-color: #fff;
	color: rgb(21, 178, 179);
	&:after {
		content: url('https://api.iconify.design/ant-design:down-outlined.svg?color=%2315B2B3&height=16');
		vertical-align: -0.3em;
		padding-left: 3px;
	}
`;

Dropdown.Box = styled.div`
	position: absolute;
	display: ${(props) => props.active ? "flex" : "none"};
	flex-direction: column;
`;
