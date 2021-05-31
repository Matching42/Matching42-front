import styled from 'styled-components';

export const DropdownStyled = styled.div`
  // display: inline-block;
  cursor: pointer;
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
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
`;
