import styled from 'styled-components';

export const LoginSectionViewStyled = styled.div`
  width: 100vw;
  height: calc(100vh - 17rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 11rem;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.4rem;
  background-color: #fff;
  box-shadow: 2px 2px 1.3px 1.3px rgba(0, 0, 0, 0.01);
  padding: 6rem 8rem;
`;

export const LogoBox = styled.div`
  display: flex;
`;

LogoBox.Logo = styled.div`
  display: flex;
  text-align: center;

  img {
    width: 9.5rem;
  }
`;

LogoBox.Title = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  margin-left: 1.6rem;
  background-position: center top;
  line-height: 4.1rem;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 0.4rem;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 2rem;
`;

Description.Text = styled.span`
  font-weight: bold;
  font-size: 1em;
`;

export const ClickButton = styled.div`
  width: 80%;
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
  background-color: #27babb;
  border-radius: 1rem;
  margin-top: 2.2rem;
  padding: 2rem 0;
  cursor: pointer;
`;
