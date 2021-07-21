import React, { useState, useCallback } from 'react';
import { AddTagStyled, PlusButton, DuplicateError } from './AddTag.styles';
import PlusIcon from '../../assets/icons/PlusIcon';

const AddTag = ({ tags, onPlusButtonClick, isDuplicate }) => {
  const [tag, setTag] = useState('');

  const handlePlusButtonClick = () => {
    if (tags.length <= 3) {
      onPlusButtonClick?.(tag, setTag);
    }
  };

  const handleChangeInput = e => {
    if (e.target.value.length <= 5 && tags.length <= 3 && e.target.value.indexOf(' ') === -1) setTag(e.target.value);
  };

  return (
    <>
    <AddTagStyled>
      <AddTagStyled.Input
        type="text"
        placeholder={tags.length > 3 ? '태그를 모두 등록했습니다.' : '5자 이내, 4개 이하의 태그로 팀을 소개해보세요.'}
        value={tag}
        length={tags.length}
        onChange={handleChangeInput}
        isDuplicate={isDuplicate}
      />
      <PlusButton onClick={handlePlusButtonClick} length={tags.length}>
        <PlusIcon color={tags.length > 3 ? '#252831' : '#27babb'} />
      </PlusButton>
    </AddTagStyled>
    <DuplicateError isVisible={isDuplicate}>이미 등록된 태그입니다. </DuplicateError>
    </>
  );
};

export default AddTag;
