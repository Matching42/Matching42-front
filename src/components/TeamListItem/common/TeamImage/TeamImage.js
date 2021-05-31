import React from 'react';
import { TeamImageStyled, UserImageStyled } from './TeamImage.styles';

const TeamImage = ({ teamMember }) => (
  <TeamImageStyled>
    {teamMember.map((member, i) => (
      <UserImageStyled key={i} url={`https://cdn.intra.42.fr/users/small_${member}.jpg`} />
    ))}
  </TeamImageStyled>
);

export default TeamImage;
