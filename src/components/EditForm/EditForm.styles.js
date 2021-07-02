import styled from 'styled-components';

export const EditFormStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Logo = styled.div`
  width: 30%;
  height: 100%;
  margin-top: -14px;
`;

export const SelectForm = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
`;

SelectForm.Box = styled.div`
  width: 100%;
  height: 100%;
`;

export const SelectItem = styled.div`
  width: 100%;
  padding-bottom: 40px;
  font-size: 28px;
`;

SelectItem.Title = styled.p`
  font-size: 0.6em;
  font-weight: bold;
`;

SelectItem.Info = styled.div`
  width: 100%;
  font-size: 0.5em;
  margin-top: 15px;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 15px 20px;
  box-sizing: border-box;
  color: #fff;
  background-color: #27babb;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.15s;

  :hover {
    background-color: #25a9aa;
  }
`;

export const TeamTagList = styled.ul`
  display: flex;
  margin-top: 20px;
`;

TeamTagList.Item = styled.li`
  background-color: #DEF5F5;
  color: #27B9BA;
  margin-right: 7px;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 0.48em;
  font-weight: medium;

  svg {
      margin-left: 12px;
      width: 6px;
      height: 6px;
  }
`;

export const DeleteTagButton = styled.span``;