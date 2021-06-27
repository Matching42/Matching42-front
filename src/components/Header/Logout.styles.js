import styled from 'styled-components';

export const LogoutStyled = styled.div`
  display: block;
  position: absolute;
  top: 75px;
  right: 34px;

  .bubble {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 25px 30px;
    background: #ffffff;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    border: #27babb solid 1px;
  }

  .bubble:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 8px 16px;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -15px;
    left: 226px;
  }

  .bubble:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 9px 18px;
    border-color: #27babb transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -18px;
    left: 225px;
  }
`;

LogoutStyled.UserWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid #f9f9f9;
`;

LogoutStyled.UserInfo = styled.div`
  margin-left: 10px;

  h2 {
    font-weight: bold;
    font-size: 0.6em;
    margin-bottom: 8px;
  }

  p {
    color: #7c7e83;
    font-size: 0.4em;
  }
`;

LogoutStyled.Button = styled.div`
  color: #7c7e83;
  font-size: 0.5em;
  margin-top: 20px;
  padding-left: 5px;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    color: #252831;
  }
`;
