import React, { useState } from 'react';
import { EditFormStyled, Logo, SelectForm, SelectItem, SubmitButton, TeamTagList } from './EditForm.styles';
import logoBlack from '../../assets/images/42_logo_black.svg';
import TextInput from '../TextInput/TextInput';
import { ReactComponent as DeleteIcon } from '../../assets/icons/icon-delete.svg';

const EditForm = ({ team, onCloseButton, onSubmitButton }) => {
    const [teamName, setTeamName] = useState('Cub3d Team');
    const [teamDescription, setTeamDescription] = useState('Team GitHub Repository, Notion, Slack 적극 활용하여 동료들과 함께 학습을 진행해보세요!');
    const [teamTags, setTeamTags] = useState([]);

    const handleSubmitButtonClick = () => {
        onSubmitButton?.(teamName, teamTags);
        onCloseButton();
    }

    return (
    <EditFormStyled>
      <Logo>
        <img src={logoBlack} alt="logo" width="95" />
      </Logo>
      <SelectForm>
        <SelectForm.Box>
          <SelectItem>
            <SelectItem.Title>Team Name</SelectItem.Title>
            <SelectItem.Info>
              <TextInput inputText={teamName} setInputText={setTeamName}/>
            </SelectItem.Info>
          </SelectItem>
          <SelectItem>
            <SelectItem.Title>Description</SelectItem.Title>
            <SelectItem.Info>
              <TextInput inputText={teamDescription} setInputText={setTeamDescription} />
            </SelectItem.Info>
          </SelectItem>
          <SelectItem>
            <SelectItem.Title>Tags</SelectItem.Title>
            <SelectItem.Info>
              <TextInput placeholderInfo="5자 이내, 4개 이하의 태그로 팀을 소개해보세요." />
            </SelectItem.Info>
            <TeamTagList>
            {team.tags.map((item, index) => (
              <TeamTagList.Item key={index}>{item}<span className="deleteIcon"><DeleteIcon /></span></TeamTagList.Item>
            ))}
          </TeamTagList>
          </SelectItem>
        </SelectForm.Box>
        <SubmitButton onClick={handleSubmitButtonClick}>수정완료</SubmitButton>
      </SelectForm>
    </EditFormStyled>
    );
    }

export default EditForm;
