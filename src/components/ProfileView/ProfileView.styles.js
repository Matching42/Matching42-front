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
  font-size: 2.8rem;
`;

export const ProfileTitle = styled.h3`
  font-size: 0.8em;
  font-weight: bold;
`;

export const ProfileDescription = styled.p`
  font-size: 0.45em;
  line-height: 1.5;
  padding: 15px 0;
`;

export const UserStateList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

UserStateList.Item = styled.li`
  background-color: rgba(0, 0, 0, 15%);
  border-radius: 8px;
  font-size: 0.4em;
  line-height: 1.4;
  padding: 5px 10px;
  margin-right: 10px;
`;
