import styled, { css } from 'styled-components';
import nonPeople from '../../../../assets/icons/icon-nonPeople.svg';

export const TeamImageStyled = styled.span`
  display: flex;
  align-items: center;
`;

const staticUserImageStyled = css`
  width: ${props => (props.size === 'small' ? '2rem' : '4.5rem')};
  height: ${props => (props.size === 'small' ? '2rem' : '4.5rem')};
  margin-left: ${props => (props.size === 'small' ? '0.5rem' : '0')};
`;

export const UserImageStyled = styled.img`
  ${staticUserImageStyled}
  border-radius: 50%;
  background-image: url(${nonPeople});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  object-fit: cover;
`;

export const RestMemberImageStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: #f2f2f2;
  border-radius: 50%;
  margin-left: 0.5rem;
  font-size: 1em;
  font-weight: bold;
  color: #c9c9c9;
`;
