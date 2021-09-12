import styled from 'styled-components';

export const DropdownStyled = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 1rem;
  box-sizing: border-box;
  padding-bottom: ${props => props.type === 'form' && '1rem'};
  padding-left: ${props => props.type === 'form' && '0.5rem'};
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
  font-size: 1.2rem;
`;

DropdownButton.Name = styled.button`
  margin-right: 0.8rem;
  cursor: pointer;
  background-color: #fff;
  font-size: 1em;
  line-height: 1.1rem;
  @media screen and (min-height: 2160px) {
    padding-bottom: 0.1rem;
  }
`;

DropdownButton.ArrowIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled.button`
  width: 1.1rem;
  height: 1.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const DropdownBox = styled.div`
  display: flex;
  position: absolute;
  width: ${props => props.type === 'default' && '82%'};
  left: ${props => (props.type === 'default' ? '50%' : '0')};
  right: 0;
  transform: ${props => props.type === 'default' && 'translate(-50%)'};
  padding: 0.2rem 2.6rem;
  z-index: 100;
  display: ${props => (props.active ? 'flex' : 'none')};
  opacity: ${props => (props.active ? '1' : '0')};
  transition: opacity 0.1s ease-in-out;
  flex-direction: column;
  border: 1px solid #27babb;
  border-radius: 1rem;
  background-color: #fff;
  margin-top: 1rem;
  overflow: auto;
  height: 80%;
  font-size: 1.2rem;

  ::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.4rem;
    background-color: #d5d5d5;
  }
  ::-webkit-scrollbar-track {
    margin: 1rem 0;
  }
  ::-webkit-scrollbar-track-piece {
  }
`;

DropdownBox.List = styled.div`
  padding: 1.5rem 0;
  padding-top: 2rem;
  border-bottom: 2px solid #f9f9f9;
  font-size: 1em;

  :last-child {
    border: none;
  }
`;

DropdownBox.List.Title = styled.p`
  margin-bottom: 0.8rem;
  font-size: 1.1em;
  font-weight: bold;
`;

DropdownBox.Item = styled.span`
  display: inline-block;
  margin-right: 1.5rem;
  font-size: 1em;
  color: ${props => (props.selected ? '#27BABB' : '#252831')};
  padding: 0.5rem 0;
  cursor: pointer;

  :hover {
    color: #27babb;
  }
`;
