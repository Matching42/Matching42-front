import React, { useCallback } from 'react';
import { TextInputStyled } from './TextInput.styles';

const TextInput = ({ placeholderInfo, inputText, setInputText, checkEmptyInput, responseStatus, setResponseStatus, emptyMessage }) => {
  const handleChangeInput = useCallback(
    e => {
      setInputText(e.target.value);
      setResponseStatus?.(0);
    },
    [setInputText]
  );

  return (
    <>
      <TextInputStyled type="text" placeholder={placeholderInfo} value={inputText} onChange={handleChangeInput} checkEmptyInput={checkEmptyInput} />
      {checkEmptyInput && inputText === '' && <TextInputStyled.EmptyText>{emptyMessage || '아이디를 입력해주세요.'}</TextInputStyled.EmptyText>}
      {inputText !== '' && responseStatus === 400 && <TextInputStyled.EmptyText>존재하지 않는 아이디입니다. 아이디를 정확하게 입력해주세요.</TextInputStyled.EmptyText>}
    </>
  );
};

export default TextInput;
