import styled from 'styled-components';

export const DropdownStyled = styled.div`
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding-right: 10px;
  box-sizing: border-box;
  padding-bottom: ${props => props.type === 'form' && '10px'};
  padding-left: ${props => props.type === 'form' && '5px'};
  border-bottom: ${props => (props.type === 'form' && !props.active ? '1px solid #252831' : 'none')};

  .scrollbar {
    display: ${props => (props.active ? 'block' : 'none')};
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

export const DropdownButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: ${props => (props.active ? '#27BABB' : '#252831')};
`;

DropdownButton.Name = styled.button`
  padding-top: 1px;
  margin-right: 8px;
  cursor: pointer;
  background-color: #fff;
`;

DropdownButton.ArrowIcon = styled.div``;

export const IconButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
`;

export const DropdownBox = styled.div`
  display: flex;
  position: absolute;
  width: ${props => props.type === 'default' && '82%'};
  left: ${props => (props.type === 'default' ? '50%' : '0')};
  right: 0;
  transform: ${props => props.type === 'default' && 'translate(-50%)'};
  padding: 2px 26px;
  z-index: 100;
  display: ${props => (props.active ? 'flex' : 'none')};
  opacity: ${props => (props.active ? '1' : '0')};
  transition: opacity 0.1s ease-in-out;
  flex-direction: column;
  border: 1px solid #27babb;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 10px;
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
  padding: 15px 0;
  padding-top: 20px;
  border-bottom: 2px solid #f9f9f9;

  :last-child {
    border: none;
  }
`;

DropdownBox.List.Title = styled.p`
  margin-bottom: 8px;
  font-size: 1em;
  font-weight: bold;
`;

DropdownBox.Item = styled.span`
  display: inline-block;
  margin-right: 15px;
  font-size: 0.8em;
  color: ${props => (props.selected ? '#27BABB' : '#252831')};
  padding: 5px 0;
  cursor: pointer;

  :hover {
    color: #27babb;
  }
`;
