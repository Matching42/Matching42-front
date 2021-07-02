import styled from 'styled-components';

export const MyTeamListViewStyled = styled.div`
  width: 100%;
  height: 63%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 28px;
`;

export const Topbar = styled.div`
  width: 100%;
  max-width: inherit;
  border-bottom: 2px solid rgba(0, 0, 0, 0.11);
  padding-bottom: 15px;
  font-size: 0.6em;
  font-weight: bold;
`;

export const NoneMyTeamData = styled.p`
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  left: 50%;
  font-size: 16px;
  color: #252831;
`;
