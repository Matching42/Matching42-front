import React, { useEffect, useState } from 'react';
import { SurveyFormStyled, Logo, SelectForm, SelectItem, SubmitButton } from './SurveyForm.styles';
import logoBlack from '../../assets/images/42_logo_black.svg';
import TextInput from '../TextInput/TextInput';
import RadioButton from '../RadioButton/RadioButton';

const SurveyForm = ({ onCloseButton }) => {
  const [subject, setSubject] = useState('');
  const [githubId, setGithubId] = useState('');
  const [preferredCluster, setPreferredCluster] = useState('개포');

  useEffect(() => {
    console.log('github id : ', githubId);
    console.log('preferred Cluster : ', preferredCluster);
  }, [githubId, preferredCluster]);

  const handleSubmitButtonClick = () => {
    onCloseButton();
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
            <SelectItem.Info>Dropdown</SelectItem.Info>
          </SelectItem>
          <SelectItem>
            <SelectItem.Title>Github ID</SelectItem.Title>
            <SelectItem.Info>
              <TextInput placeholderInfo="레포지토리 생성에 필요한 아이디를 입력해주세요." inputText={githubId} setInputText={setGithubId} />
            </SelectItem.Info>
          </SelectItem>
          <SelectItem>
            <SelectItem.Title>Preferred cluster</SelectItem.Title>
            <SelectItem.Radio>
              <RadioButton name="개포" checkRadioButton={preferredCluster} setCheckRadioButton={setPreferredCluster} />
              <RadioButton name="서초" checkRadioButton={preferredCluster} setCheckRadioButton={setPreferredCluster} />
              <RadioButton name="상관없음" checkRadioButton={preferredCluster} setCheckRadioButton={setPreferredCluster} />
            </SelectItem.Radio>
          </SelectItem>
        </SelectForm.Box>
        <SubmitButton onClick={handleSubmitButtonClick}>작성완료</SubmitButton>
      </SelectForm>
    </SurveyFormStyled>
  );
};

export default SurveyForm;
