import styled from 'styled-components';

export const SurveyFormStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .scrollbar {
    width: 4px;
    height: calc(100% - 80px);
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: #fff;
    opacity: 1;
    transition: 0.5s;
  }
  :hover .scrollbar {
    opacity: 0;
    height: 0;
  }
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
  height: calc(100% - 46px);
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #d5d5d5;
  }
  ::-webkit-scrollbar-track {
    margin-bottom: 35px;
  }
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

SelectItem.Radio = styled.div`
  display: flex;
  flex-direction: row;
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
  font-size: 1.4rem;
  font-weight: bold;

  :hover {
    background-color: #25a9aa;
  }
`;
