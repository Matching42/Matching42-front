import styled from 'styled-components';

const TeamMemberImageStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 4px;
  padding-top: 15px;
  font-size: 2.4rem;
`;

TeamMemberImageStyled.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  padding-right: 15px;
  font-size: 0.4em;
  line-height: 1.8;
  text-align: center;
`;

TeamMemberImageStyled.EmptyName = styled.span`
  color: #d5d5d5;
`;

export default TeamMemberImageStyled;
