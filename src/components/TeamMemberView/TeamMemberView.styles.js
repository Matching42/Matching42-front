import styled from 'styled-components';

export const TeamMemberViewStyled = styled.div`
  width: 52%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #fff;
  padding: 3rem;
  border-radius: 2rem;
  box-sizing: border-box;
`;

export const TeamMemberViewTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f9f9f9;
  padding-bottom: 1.5rem;
  font-size: 2.8rem;
`;

TeamMemberViewTop.Wrap = styled.div`
  font-size: 1em;
`;

TeamMemberViewTop.Title = styled.h1`
  font-size: 0.7em;
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

TeamMemberViewTop.Description = styled.p`
  font-size: 0.4em;
  line-height: 1.5;
`;

TeamMemberViewTop.Lock = styled.div`
  width: 2.3rem;
  cursor: ${props => (props.isLeader && !props.checkEnd ? 'pointer' : 'Default')};
  margin-right: 1rem;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${props => (props.isLeader && !props.checkEnd ? '#27BABB' : '#D5D5D5')};
    }
  }
`;
