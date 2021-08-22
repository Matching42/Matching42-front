import styled from 'styled-components';

export const LogoStyled = styled.nav`
  margin-top: 4px;
`;

const HeaderStyled = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  box-sizing: border-box;
  background-color: #252831;
  font-size: 2.8rem;
  z-index: 1;

  a {
    color: #fff;
    text-decoration: none;
  }
  p {
    color: #fff;
  }
  .logo {
    width: 5rem;
    height: 5rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

HeaderStyled.Image = styled.div`
  cursor: pointer;
`;

export default HeaderStyled;
