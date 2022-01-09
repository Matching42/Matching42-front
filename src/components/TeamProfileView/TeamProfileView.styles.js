import styled from 'styled-components';

export const TeamProfileViewStyled = styled.div`
  width: 46%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #27babb;
  padding: 3rem;
  border-radius: 2rem;
  box-sizing: border-box;
  color: #fff;
`;

export const TeamProfileLeftBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2.8rem;
`;

TeamProfileLeftBox.Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;
`;

TeamProfileLeftBox.Name = styled.div`
  overflow: hidden;
  font-size: 0.9em;
  font-weight: bold;
  margin-right: 1.8rem;
  width: 25rem;
  text-overflow: ellipsis;
`;

TeamProfileLeftBox.EditButton = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const TeamDescription = styled.div`
  font-size: 0.45em;
  line-height: 1.6;
  margin-top: 1rem;
  padding-right: 1rem;
  word-break: keep-all;
`;

export const TeamTagList = styled.ul`
  display: flex;
  font-size: 0.4em;
  margin-top: 1rem;
`;

TeamTagList.Item = styled.li`
  background-color: rgb(0, 0, 0, 0.15);
  margin-right: 0.6rem;
  border-radius: 0.8rem;
  padding: 0.8rem 1rem;
`;

TeamTagList.Subject = styled.li`
  background-color: #f4fbfb;
  color: #27babb;
  margin-right: 0.6rem;
  border-radius: 0.8rem;
  padding: 0.8rem 1rem;
`;

export const TeamProfileRightBox = styled.div`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
`;
