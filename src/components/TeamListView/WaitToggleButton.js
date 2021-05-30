import React, { useState } from 'react'
import {WaitToggleStyled, WaitSpanStyled, ToggleStyled, WaitToggleButtonStyled} from './WaitToggleButton.styles'

export const WaitToggleButton = () => {

	const [toggle, setToggle] = useState(true);

	const onClick = () => {
		setToggle(!toggle);
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
