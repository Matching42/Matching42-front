import React from 'react';
import { HashTagStyled } from './HashTag.styles';

const HashTags = ({ tags }) => (
  <span>{tags && tags.length > 0 ? tags.map((tag, index) => <HashTagStyled key={index}># {tag}</HashTagStyled>) : <HashTagStyled># 아직 등록된 태그가 없어요!</HashTagStyled>}</span>
);

export default HashTags;
