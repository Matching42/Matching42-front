import styled from 'styled-components';

export const ProfileViewStyled = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #27babb;       
  border-radius: 20px;
  padding: 35px 30px;
  box-sizing: border-box;
  color: #fff;
  font-size: 62.5%;
`;

export const Title = styled.h3`
  font-size: 3.2em;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1.6em;
  font-weight: regular;
  line-height: 1.5;
`;

export const UserStateList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const UserStateItem = styled.li`
  background-color: rgba(0,0,0,15%);
  border-radius: 8px;
  font-size: 1.4em;
  line-height: 1.4;
  padding: 5px 10px;
  margin-right: 10px;
`;
