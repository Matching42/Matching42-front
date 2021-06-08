import styled from 'styled-components';

export const DropdownStyled = styled.div`
  // display: inline-block;
  cursor: pointer;
  font-size: 16px;
`;

export const DropdownButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  color: rgb(21, 178, 179);
  &:after {
    content: url('https://api.iconify.design/ant-design:down-outlined.svg?color=%2315B2B3&height=16');
    vertical-align: -0.3em;
    padding-left: 3px;
  }
`;

export const DropdownBox = styled.div`
  position: absolute;
  left: 35px;
  right: 30px;
  padding: 2px 26px;
  z-index: 100;
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  border: 1px solid #27babb;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 11px;
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
`;
