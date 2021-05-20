import React from 'react'
import styled from 'styled-components';

export const WaitToggleButton = () => (
	<WaitToggleStyled>
		<WaitSpanStyled>
			Wait
		</WaitSpanStyled>
		<WaitToggleButtonStyled>
			<ToggleStyled />
		</WaitToggleButtonStyled>
	</WaitToggleStyled>
)

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
	padding: 2px;
	width: 18px;
	height: 18px;
	background-color: #fff;
	border-radius: 50%;
`;

const WaitToggleButtonStyled = styled.div`
	width: 40px;
	height: 100%;
	background-color: rgb(21, 178, 179);
	border-radius: 22px;
`;