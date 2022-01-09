import styled from 'styled-components';

export const MyTeamListViewStyled = styled.div`
  width: 100%;
  height: 63%;
  min-height: 150px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
  padding: 3rem;
  border-radius: 2rem;
  box-sizing: border-box;
  font-size: 2.8rem;
`;

export const Topbar = styled.div`
  width: 100%;
  max-width: inherit;
  border-bottom: 2px solid rgba(0, 0, 0, 0.11);
  padding-bottom: 1.5rem;
  font-size: 0.55em;
  font-weight: bold;
`;

export const NoneMyTeamData = styled.p`
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  left: 50%;
  font-size: 0.45em;
`;
