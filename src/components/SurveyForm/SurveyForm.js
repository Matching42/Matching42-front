import React, { useState } from 'react';
import { SurveyFormStyled, Logo, SelectForm, SelectItem, SubmitButton } from './SurveyForm.styles';
import logoBlack from '../../assets/images/42_logo_black.svg';
import TextInput from '../TextInput/TextInput';
import RadioButton from '../RadioButton/RadioButton';
import Dropdown from '../Dropdown/Dropdown';

const SurveyForm = ({ onCloseButton, onSubmitButton, responseStatus }) => {
  const [selectedSubject, setSelectedSubject] = useState('Libft');
  const [githubId, setGithubId] = useState('');
  const [checkEmptyInput, setCheckEmptyInput] = useState(false);
  const [preferredCluster, setPreferredCluster] = useState('개포');

  const handleSubmitButtonClick = () => {
    if (githubId === '') {
      setCheckEmptyInput(true);
      return;
    }
    if (responseStatus === 400)
      return ;
    onSubmitButton?.(selectedSubject, githubId, preferredCluster);
  };

  return (
    <SurveyFormStyled>
      <Logo>
        <img src={logoBlack} alt="logo" width="95" />
      </Logo>
      <SelectForm>
        <SelectForm.Box>
          <SelectItem>
            <SelectItem.Title>Subject</SelectItem.Title>
            <SelectItem.Info>
              <Dropdown selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} type="form" />
            </SelectItem.Info>
          </SelectItem>
          <SelectItem>
            <SelectItem.Title>Github ID</SelectItem.Title>
            <SelectItem.Info>
              <TextInput placeholderInfo="레포지토리 생성에 필요한 아이디를 입력해주세요." inputText={githubId} setInputText={setGithubId} checkEmptyInput={checkEmptyInput} responseStatus={responseStatus}/>
            </SelectItem.Info>
          </SelectItem>
          <SelectItem>
            <SelectItem.Title>Preferred cluster</SelectItem.Title>
            <SelectItem.Radio>
              <RadioButton name="개포" checkRadioButton={preferredCluster} setCheckRadioButton={setPreferredCluster} />
              <RadioButton name="서초" checkRadioButton={preferredCluster} setCheckRadioButton={setPreferredCluster} />
            </SelectItem.Radio>
          </SelectItem>
        </SelectForm.Box>
        <SubmitButton onClick={handleSubmitButtonClick}>작성완료</SubmitButton>
      </SelectForm>
    </SurveyFormStyled>
  );
};

export default SurveyForm;
