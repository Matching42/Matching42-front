import React from 'react'
import { HashTagStyled } from './HashTag.styles'

export const HashTags = (props) => (
	<span>
			{props.dummy.map(item => <HashTagStyled key={item.id}># {item.tag}</HashTagStyled>)}
	</span>
)

HashTags.defaultProps = {
	dummy: [
		{id: 1, tag: "온라인"},
		{id: 2, tag: "낯"},
		{id: 3, tag: "매일 2시간"},
	]
}