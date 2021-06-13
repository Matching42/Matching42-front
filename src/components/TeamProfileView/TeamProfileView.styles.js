import styled from 'styled-components';

export const TeamProfileViewStyled = styled.div`
  width: 39%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #27babb;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 28px;
  color: #fff;
  position: relative;
`;

export const TeamProfile = styled.div`
  display: flex;
  font-size: 1em;
`;

TeamProfile.Name = styled.div`
  font-size: 1.15em;
  font-weight: bold;
  margin-right: 20px;
`;

TeamProfile.EditButton = styled.div`
  cursor: pointer;
`;

export const TeamDescription = styled.div`
  font-size: 0.57em;
  line-height: 1.2;
`;

export const TeamTagList = styled.ul`
  display: flex;
  font-size: 0.61em;
`;

TeamTagList.Item = styled.li`
  background-color: rgb(0, 0, 0, 0.15);
  margin-right: 12px;
  border-radius: 8px;
  padding: 6px 12px;
`;
