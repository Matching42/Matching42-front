import React from 'react';
import { HashTagStyled } from './HashTag.styles';

const HashTags = ({ tags }) => (
  <span>
    {tags?.map((tag, i) => (
      <HashTagStyled key={i}># {tag}</HashTagStyled>
    ))}
  </span>
);

export default HashTags;
