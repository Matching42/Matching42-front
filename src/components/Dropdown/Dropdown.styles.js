import styled from 'styled-components';

export const DropdownStyled = styled.div`
  cursor: pointer;
  font-size: 16px;
  height: 78%;
  padding-right: 10px;

  .scrollbar {
    width: 4px;
    height: calc(100% - 80px);
    position: absolute;
    top: 70px;
    right: 30px;
    background-color: #fff;
    opacity: 1;
    transition: 0.5s;
  }
  :hover .scrollbar {
    opacity: 0;
  }
`;

export const DropdownButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  color: ${props => (props.active ? '#27BABB' : '#252831')};
  display: flex;
`;

DropdownButton.Name = styled.div`
  margin-right: 8px;
`;

DropdownButton.ArrowIcon = styled.div``;

export const DropdownBox = styled.div`
  display: flex;
  position: absolute;
  left: 33px;
  right: 29px;
  padding: 2px 26px;
  z-index: 100;
  display: ${props => (props.active ? 'flex' : 'none')};
  opacity: ${props => (props.active ? '1' : '0')};
  transition: opacity 0.1s ease-in-out;
  flex-direction: column;
  border: 1px solid #27babb;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 17px;
  overflow: auto;
  height: 80%;

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
  ::-webkit-scrollbar-track-piece {
  }
`;

DropdownBox.List = styled.div`
  padding: 20px 0;
  border-bottom: 2px solid #f9f9f9;
`;

DropdownBox.List.Title = styled.p`
  margin-bottom: 8px;
  font-size: 1em;
  font-weight: bold;
`;

DropdownBox.Item = styled.span`
  display: inline-block;
  margin-right: 15px;
  font-size: 0.85em;
  color: ${props => (props.selected ? '#27BABB' : '#252831')};

  :hover {
    color: #27babb;
  }
`;
