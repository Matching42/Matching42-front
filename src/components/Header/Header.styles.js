import styled from 'styled-components';

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

const div = styled.nav`
  width = 50px;
`;

const logo = styled.nav`
  
`;

export default HeaderStyled;
