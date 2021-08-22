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
    top: 0;
    right: 0;
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
  margin-top: -1.4rem;
`;

export const SelectForm = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
`;

SelectForm.Box = styled.div`
  width: 100%;
  height: calc(100% - 4.6rem);
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: #d5d5d5;
  }
  ::-webkit-scrollbar-track {
    margin-bottom: 3.5rem;
  }
`;

export const SelectItem = styled.div`
  width: 100%;
  padding-bottom: 4rem;
  font-size: 2.8rem;
`;

SelectItem.Title = styled.p`
  font-size: 0.55em;
  font-weight: bold;
`;

SelectItem.Info = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

SelectItem.Radio = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  color: #fff;
  background-color: #27babb;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.15s;
  font-size: 1.4rem;
  font-weight: bold;

  :hover {
    background-color: #25a9aa;
  }
`;
