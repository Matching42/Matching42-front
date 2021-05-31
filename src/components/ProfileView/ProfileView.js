import React from 'react';
import { ProfileViewStyled, Title, Description, UserStateList, UserStateItem } from './ProfileView.styles';

const ProfileView = ({ user }) => (
  <ProfileViewStyled>
    <Title>Hello, {user.ID} !</Title>
    <Description>
      오늘 하루도 힘차게 달려볼까요?
      <br />
      오른쪽 상단의 매칭 신청하기 버튼을 눌러 시작해보세요!
    </Description>
    <UserStateList>
      <UserStateItem>Level: {user.level}</UserStateItem>
      <UserStateItem>Black Hole : {user.blackhole} days left</UserStateItem>
    </UserStateList>
  </ProfileViewStyled>
);

export default ProfileView;

ProfileView.defaultProps = {
  user: {
    ID: 'seomoon',
    level: 4.01,
    blackhole: 28
  }
};
