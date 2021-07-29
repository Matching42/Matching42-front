import React, { useState } from 'react';
import { EditFormStyled, Logo, SelectForm, SelectItem, SubmitButton, TeamTagList } from './EditForm.styles';
import logoBlack from '../../assets/images/42_logo_black.svg';
import TextInput from '../TextInput/TextInput';
import AddTag from '../AddTag/AddTag';
import { ReactComponent as DeleteIcon } from '../../assets/icons/icon-delete.svg';

const EditForm = ({ team, onCloseButton, onSubmitButton }) => {
  const [teamName, setTeamName] = useState(team.teamName);
  const [teamDescription, setTeamDescription] = useState('Team GitHub Repository, Notion, Slack 적극 활용하여 동료들과 함께 학습을 진행해보세요!');
  const [tags, setTags] = useState(team.tags ? team.tags : []);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSubmitButtonClick = () => {
    onSubmitButton?.(teamName, teamDescription, tags);
    onCloseButton();
  };

  const handlePlusButtonClick = (tag, setTag) => {
    if (tag === '')
    {
      setIsEmpty(true);
      setIsDuplicate(false);
    }
    else if (tags.indexOf(tag) === -1)
    {
      setTags(prev => [...prev, tag]);
      setIsDuplicate(false);
      setTag('');
      setIsEmpty(false);
    }
    else
      setIsDuplicate(true);
  };

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
              <TextInput inputText={teamName} setInputText={setTeamName} />
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
              <AddTag tags={tags} onPlusButtonClick={handlePlusButtonClick} isDuplicate={isDuplicate} isEmpty={isEmpty} />
            </SelectItem.Info>
            <TeamTagList>
              {tags && tags.length !== 0 ? (
                tags.map((item, index) => (
                  <TeamTagList.Item key={index}>
                    {item}
                    <span className="delete-icon">
                      <DeleteIcon onClick={() => setTags(tags => tags.filter(tag => tag !== tags[index]))} />
                    </span>
                  </TeamTagList.Item>
                ))
              ) : (
                <TeamTagList.Item># 아직 등록된 태그가 없어요!</TeamTagList.Item>
              )}
            </TeamTagList>
          </SelectItem>
        </SelectForm.Box>
        <SubmitButton onClick={handleSubmitButtonClick}>수정완료</SubmitButton>
      </SelectForm>
    </EditFormStyled>
  );
};

export default EditForm;
