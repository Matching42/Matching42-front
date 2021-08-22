import styled from 'styled-components';

const TeamMemberImageStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 0.5rem;
  padding-top: 1.5rem;
  font-size: 2.4rem;
`;

TeamMemberImageStyled.Crown = styled.div`
  width: 2rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

TeamMemberImageStyled.Item = styled.div`
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  padding-right: 1.5rem;
  font-size: 0.4em;
  line-height: 1.8;
  text-align: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

TeamMemberImageStyled.EmptyName = styled.span`
  color: #d5d5d5;
`;

export default TeamMemberImageStyled;
