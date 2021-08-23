import styled from 'styled-components';

export const EditFormStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Logo = styled.div`
  width: 30%;
  height: 100%;
  margin-top: -1.4rem;
`;

Logo.ImageStyled = styled.div`
  width: 9rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SelectForm = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
`;

SelectForm.Box = styled.div`
  width: 100%;
  height: 100%;
`;

export const SelectItem = styled.div`
  width: 100%;
  padding-bottom: 4rem;
  font-size: 2.8rem;
`;

SelectItem.Title = styled.p`
  font-size: 0.55em;
  font-weight: bold;
`;

SelectItem.Info = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  color: #fff;
  background-color: #27babb;
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.15s;

  :hover {
    background-color: #25a9aa;
  }
`;

export const TeamTagList = styled.ul`
  display: flex;
  margin-top: 2rem;
  font-size: 2.4rem;
`;

TeamTagList.Item = styled.li`
  background-color: #def5f5;
  color: #27b9ba;
  margin-right: 0.7rem;
  border-radius: 0.8rem;
  padding: 0.8rem 1rem;
  font-size: 0.48em;
  font-weight: medium;

  svg {
    margin-left: 1.2rem;
    width: 0.6rem;
    height: 0.6rem;
  }
  .delete-icon {
    cursor: pointer;
  }
`;

export const DeleteTagButton = styled.span``;
