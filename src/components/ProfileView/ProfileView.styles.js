import styled from 'styled-components';

export const ProfileViewStyled = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #27babb;
  padding: 30px;
  border-radius: 15px;
  box-sizing: border-box;
  color: #fff;
  font-size: 10px;
`;

export const Title = styled.h3`
  font-size: 3em;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Description = styled.p`
  font-size: 1.5em;
  font-weight: 300;
  line-height: 20px;
`;

export const UserStateList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const UserStateItem = styled.li`
  background-color: #219E9F;
  margin-right: 10px;
  font-size: 1.3em;
  font-weight: 300;
  padding: 8px 6px 5px 6px;
  border-radius: 5px;
`;
