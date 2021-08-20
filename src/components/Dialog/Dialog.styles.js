import styled from 'styled-components';

export const DialogStyled = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
`;

DialogStyled.Box = styled.div`
  width: ${props => (props.type === 'alert' ? '40rem' : '60%')};
  height: ${props => (props.type === 'alert' ? '24rem' : '80%')};
  min-width: ${props => props.type === 'form' && '80rem'};
  min-height: ${props => props.type === 'form' && '50rem'};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 2rem;
  padding: 7rem 8rem;
  box-sizing: border-box;
`;
