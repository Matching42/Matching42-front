import styled from 'styled-components';

export const TeamListViewStyled = styled.div`
  width: 100%;
  height: 78%;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-sizing: border-box;
`;

export const TeamListTopbarStyled = styled.div`
  width: 100%;
  max-width: inherit;
  border-bottom: 2px solid rgba(0, 0, 0, 0.11);
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const TeamListStyled = styled.div``;

export const TeamListTitleStyled = styled.span`
  margin-left: 5px;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const TopbarBtnStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  padding: 0 5px;
  font-size: 0.875rem;
`;

export const TeamListContainerStyled = styled.div`
  width: 100%;
  overflow: auto;
  padding-right: 10px;
  box-sizing: border-box;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #d5d5d5;
  }
  ::-webkit-scrollbar-track {
    margin: 10px 0;
  }
`;
