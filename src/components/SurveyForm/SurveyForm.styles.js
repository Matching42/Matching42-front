import styled from 'styled-components';

export const SurveyFormStyled = styled.div`
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

SelectItem.Radio = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 15px 20px;
  color: #fff;
  background-color: #27babb;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.15s;

  :hover {
    background-color: #25a9aa;
  }
`;
