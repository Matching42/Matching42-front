import React, { useCallback } from 'react';
import { TextInputStyled } from './TextInput.styles';

const TextInput = ({ placeholderInfo, inputText, setInputText }) => {
  const handleChangeInput = useCallback(
    e => {
      setInputText(e.target.value);
    },
    [setInputText]
  );

  return <TextInputStyled type="text" placeholder={placeholderInfo} value={inputText} onChange={handleChangeInput} />;
};

export default TextInput;
