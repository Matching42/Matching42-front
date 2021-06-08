import React from 'react';
import { HashTagStyled } from './HashTag.styles';

const HashTags = ({ tags}) => {

	const hashTagsLoop = (loopLen) => {
		const hashTagArr = [];
		for (let i = 0; i < loopLen; i++)
			tags[i] && hashTagArr.push(<HashTagStyled key={i}># {tags[i]}</HashTagStyled>);
		return hashTagArr;
	}

	return (
		<span>
			{hashTagsLoop(5)}
  	</span>
	)
};

export default HashTags;
