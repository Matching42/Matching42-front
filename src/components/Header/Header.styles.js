import styled from 'styled-components';

export const LogoStyled = styled.nav`
  margin-top: 4px;
`;

const HeaderStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: #252831;
  z-index: 1;

  a {
    color: #fff;
    text-decoration: none;
  }
  p {
    color: #fff;
  }
`;

export default HeaderStyled;
