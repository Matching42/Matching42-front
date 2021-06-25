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
  width: 470px;
  height: 430px;
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 2px 2px 1.3px 1.3px rgba(0, 0, 0, 0.01);
  text-align: center;
  line-height: 2rem;
  letter-spacing: 0.02rem;
  font-size: 1.5rem;
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
  text-align: left;
  margin-left: 0.9rem;
  background-position: center top;
  line-height: 2rem;
  letter-spacing: 0.02rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
`;

export const Description = styled.div`
  text-align: center;
  letter-spacing: -0.0001rem;
  font-size: 0.7rem;
  line-height: 0.9rem;
  padding: 20px;
  margin-bottom: 2rem;
`;

Description.Text = styled.span`
  font-weight: bold;
`;

export const ClickButton = styled.div`
  width: 15rem;
  text-align: center;
  font-size: 0.8rem;
  background: #0bd;
  color: #fff;
  background: #27babb;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 0.5rem;
  cursor: pointer;
`;
