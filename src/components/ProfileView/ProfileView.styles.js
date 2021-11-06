import styled from 'styled-components';

export const ProfileViewStyled = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #27babb;
  border-radius: 2rem;
  padding: 3.5rem 3rem;
  box-sizing: border-box;
  color: #fff;
  font-size: 2.8rem;
`;

export const ProfileTitle = styled.h3`
  font-size: 0.9em;
  font-weight: bold;
`;

export const ProfileDescription = styled.p`
  font-size: 0.45em;
  line-height: 1.5;
  padding: 1rem 0;
  white-space: pre-wrap;
`;

export const UserStateList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

UserStateList.Item = styled.li`
  background-color: rgba(0, 0, 0, 15%);
  border-radius: 0.8rem;
  font-size: 0.4em;
  line-height: 1.4;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
`;
