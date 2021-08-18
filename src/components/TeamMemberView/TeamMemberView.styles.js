import styled from 'styled-components';

export const TeamMemberViewStyled = styled.div`
  width: 52%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-sizing: border-box;
`;

export const TeamMemberViewTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #f9f9f9;
  padding-bottom: 15px;
  font-size: 2.8rem;
`;

TeamMemberViewTop.Wrap = styled.div`
  font-size: 1em;
`;

TeamMemberViewTop.Title = styled.h1`
  font-size: 0.6em;
  font-weight: bold;
  padding-bottom: 5px;
`;

TeamMemberViewTop.Description = styled.p`
  font-size: 0.3em;
  line-height: 1.5;
`;

TeamMemberViewTop.Lock = styled.div`
  width: 23px;
  cursor: ${props => (props.isLeader && !props.checkEnd ? 'pointer' : 'Default')};
  margin-right: 10px;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${props => (props.isLeader && !props.checkEnd ? '#27BABB' : '#D5D5D5')};
    }
  }
`;
