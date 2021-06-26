import React, { useCallback } from 'react';
import { TextInputStyled } from './TextInput.styles';

const TextInput = ({ placeholderInfo, inputText, setInputText, checkEmptyInput }) => {
  const handleChangeInput = useCallback(
    e => {
      setInputText(e.target.value);
    },
    [setInputText]
  );

  return (
    <>
      <TextInputStyled type="text" placeholder={placeholderInfo} value={inputText} onChange={handleChangeInput} checkEmptyInput={checkEmptyInput} />
      {checkEmptyInput && inputText === '' && <TextInputStyled.EmptyText>아이디를 입력해주세요.</TextInputStyled.EmptyText>}
    </>
  );
};

export default TextInput;
