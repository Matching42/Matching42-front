import React, { useState } from 'react';
import { AddTagStyled, PlusButton, DuplicateError } from './AddTag.styles';
import PlusIcon from '../../assets/icons/PlusIcon';

const AddTag = ({ tags, onPlusButtonClick, isDuplicate, isEmpty }) => {
  const [tag, setTag] = useState('');
  const [isTagChanged, setIsTagChanged] = useState(false);

  const handlePlusButtonClick = () => {
    if (tags.length <= 3) {
      onPlusButtonClick?.(tag, setTag);
      setIsTagChanged(false);
    }
  };

  const handleChangeInput = e => {
    if (e.target.value.length <= 5 && tags.length <= 3 && e.target.value.indexOf(' ') === -1)
    { 
      setTag(e.target.value);
      if (isDuplicate || isEmpty)
        setIsTagChanged(true);
    }
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
        isError={!isTagChanged && (isDuplicate || (isEmpty && tag === ''))}
      />
      <PlusButton onClick={handlePlusButtonClick} length={tags.length}>
        <PlusIcon color={tags.length > 3 ? '#252831' : '#27babb'} />
      </PlusButton>
    </AddTagStyled>
    <DuplicateError isVisible={!isTagChanged && (isDuplicate || (isEmpty && tag === ''))} >{isDuplicate ? '이미 등록된 태그입니다. ' : '태그를 입력하세요. '}</DuplicateError>
    </>
  );
};

export default AddTag;
