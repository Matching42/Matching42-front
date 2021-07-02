import styled from 'styled-components';

export const TeamProfileViewStyled = styled.div`
  width: 46%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #27babb;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 28px;
  color: #fff;
`;

export const TeamProfileLeftBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

TeamProfileLeftBox.Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

TeamProfileLeftBox.Name = styled.div`
  font-size: 0.9em;
  font-weight: bold;
  margin-right: 18px;
`;

TeamProfileLeftBox.EditButton = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
  cursor: pointer;
`;

export const TeamDescription = styled.div`
  font-size: 0.45em;
  line-height: 1.6;
  margin-top: 24px;
  word-break: keep-all;
`;

export const TeamTagList = styled.ul`
  display: flex;
  font-size: 0.48em;
  margin-top: 20px;
`;

TeamTagList.Item = styled.li`
  background-color: rgb(0, 0, 0, 0.15);
  margin-right: 6px;
  border-radius: 8px;
  padding: 8px 10px;
`;

TeamTagList.Subject = styled.li`
  background-color: #f4fbfb;
  color: #27babb;
  margin-right: 6px;
  border-radius: 8px;
  padding: 8px 10px;
`;

export const TeamProfileRightBox = styled.div``;
