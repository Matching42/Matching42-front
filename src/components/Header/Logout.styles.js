import styled from 'styled-components';

export const LogoutStyled = styled.div`
  display: block;
  position: absolute;
  top: 7.4rem;
  right: 2.4rem;

  .bubble {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2.5rem 3rem;
    background: #ffffff;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    border-radius: 1rem;
    border: #27babb solid 1px;
  }

  .bubble:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 0.8rem 1.6rem;
    border-color: #ffffff transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -1.5rem;
    right: 2.1rem;
  }

  .bubble:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 0.9rem 1.8rem;
    border-color: #27babb transparent;
    display: block;
    width: 0;
    z-index: 0;
    top: -1.8rem;
    right: 2rem;
  }
`;

LogoutStyled.UserWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f9f9f9;
`;

LogoutStyled.UserInfo = styled.div`
  margin-left: 1.2rem;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  p {
    color: #7c7e83;
    font-size: 1.1rem;
  }
`;

LogoutStyled.Button = styled.div`
  margin-top: 2rem;
  padding-left: 0.5rem;
  transition: 0.2s;
  font-size: 1.3rem;
  color: #7c7e83;
  cursor: pointer;

  :hover {
    color: #252831;
  }
`;
