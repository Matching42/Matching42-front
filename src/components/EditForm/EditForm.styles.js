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
  font-size: 2.8rem;
`;

SelectItem.Title = styled.p`
  font-size: 0.55em;
  font-weight: bold;
`;

SelectItem.Info = styled.div`
  width: 100%;
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
  font-size: 1.4rem;
  font-weight: bold;
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
  font-size: 2.4rem;
`;

TeamTagList.Item = styled.li`
  background-color: #def5f5;
  color: #27b9ba;
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
  .delete-icon {
    cursor: pointer;
  }
`;

export const DeleteTagButton = styled.span``;
