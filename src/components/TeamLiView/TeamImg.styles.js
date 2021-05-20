import styled from 'styled-components';

export const UserImgStyled = styled.img`
  width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	margin-left: 10px;
  background-image: url(${(props => props.url)});
	backgorund-position: center;
	background-size: cover;
`;