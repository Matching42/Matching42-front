import styled from 'styled-components';

export const TeamImgStyled = styled.span`
	display: flex;
	align-items: center;
`;

export const UserImgStyled = styled.img`
  width: 20px;
	height: 20px;
	border-radius: 50%;
	margin-left: 5px;
  background-image: url(${(props => props.url)});
	background-size: cover;
`;