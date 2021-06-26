import React from 'react';
import { HashTagStyled } from './HashTag.styles';

const HashTags = ({ tags }) => (
  <span>
    {tags.map((tag, index) => (
      <HashTagStyled key={index}># {tag}</HashTagStyled>
    ))}
  </span>
);

export default HashTags;
