import React, { useState } from 'react';
import styled from 'styled-components';

const dummy = [
	{id: 1, subject: "libft"},
	{id: 2, subject: "get-next-line"},
	{id: 3, subject: "printf"},
]

export function Dropdown() {

	const [isActive, setisActive] = useState(false);

	const buttonOnClick = (e) => {
		e.stopPropagation(); // 서브젝트 선택으로도 드롭다운 닫히게 하고 싶다면 제거
		isActive ? setisActive(false) : setisActive(true);
	}

	const subjectOnClick = (event) => {
		console.log(event.innerHtml);
	}

	return (
		<DropdownDiv>
			<Dropdown.Button type='button' onClick={buttonOnClick}>
				Subject
			</Dropdown.Button>
			<Dropdown.Box active={isActive}>
				{dummy.map((x) => <div key={x.id} onClick={subjectOnClick}>{x.subject}</div>)}
			</Dropdown.Box>
		</DropdownDiv>
	);
}

const DropdownDiv = styled.div`
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