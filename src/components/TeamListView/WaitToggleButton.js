import React, { useState } from 'react'
import {WaitToggleStyled, WaitSpanStyled, ToggleStyled, WaitToggleButtonStyled} from './WaitToggleButton.styles'

export const WaitToggleButton = () => {

	const [Toggle, setToggle] = useState(true);

	const onClick = () => {
		setToggle(!Toggle);
	}

	return (
		<WaitToggleStyled>
			<WaitSpanStyled>
				Wait
			</WaitSpanStyled>
			<WaitToggleButtonStyled onClick={onClick}>
				<ToggleStyled Toggle={Toggle}/>
			</WaitToggleButtonStyled>
		</WaitToggleStyled>
	);
}
