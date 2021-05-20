import React, { useState } from 'react'
import styled from 'styled-components';

export const WaitToggleButton = () => {

	const [toggle, settoggle] = useState(true);

	const onClick = () => {
		toggle ? settoggle(false) : settoggle(true);
	}

	return (
		<WaitToggleStyled>
			<WaitSpanStyled>
				Wait
			</WaitSpanStyled>
			<WaitToggleButtonStyled onClick={onClick}>
				<ToggleStyled toggle={toggle}/>
			</WaitToggleButtonStyled>
		</WaitToggleStyled>
	);
}

const WaitToggleStyled = styled.div`
	width: 80px;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const WaitSpanStyled = styled.div`
	vertical-align: middle;
	padding: 2px 0;
`;

const ToggleStyled = styled.div`
	position: absolute;
	left: ${(props) => props.toggle ? "50%" : "0%"};
	margin: 2px;
	width: calc(50% - 4px);
	height: calc(100% - 4px);
	background-color: #fff;
	border-radius: 50%;
	box-sizing: border-box;
	transition: left 0.23s;
`;

const WaitToggleButtonStyled = styled.div`
	position: relative;
	display: flex;
	cursor: pointer;
	align-items: center;
	width: 40px;
	height: 100%;
	background-color: rgb(21, 178, 179);
	border-radius: 22px;
`;