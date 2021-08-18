import styled from 'styled-components';

export const LoginSectionViewStyled = styled.div`
  width: 100vw;
  height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 2px 2px 1.3px 1.3px rgba(0, 0, 0, 0.01);
  padding: 60px 80px;
`;

export const LogoBox = styled.div`
  display: flex;
`;

LogoBox.Logo = styled.div`
  display: flex;
  text-align: center;
`;

LogoBox.Title = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  margin-left: 16px;
  background-position: center top;
  line-height: 4.3rem;
  font-size: 3.2rem;
  font-weight: bold;
  margin-top: 4px;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.1rem;
  padding: 20px;
`;

Description.Text = styled.span`
  font-weight: bold;
  font-size: 1em;
`;

export const ClickButton = styled.div`
  width: 70%;
  text-align: center;
  font-size: 1.8rem;
  color: #fff;
  background-color: #27babb;
  border-radius: 10px;
  margin-top: 24px;
  padding: 20px 0;
  cursor: pointer;
`;
