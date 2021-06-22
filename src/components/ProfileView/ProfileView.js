import React from 'react';
import { ProfileViewStyled, ProfileTitle, ProfileDescription, UserStateList } from './ProfileView.styles';

const ProfileView = ({ user }) => (
  <ProfileViewStyled>
    <ProfileTitle>Hello, {user?.ID} !</ProfileTitle>
    <ProfileDescription>
      오늘 하루도 힘차게 달려볼까요?
      <br />
      오른쪽 상단의 매칭 신청하기 버튼을 눌러 시작해보세요!
    </ProfileDescription>
    <UserStateList>
      <UserStateList.Item>Level: {user?.intraInfo[0].level}</UserStateList.Item>
      <UserStateList.Item>Black Hole : {user?.intraInfo[0].blackholed_at} days left</UserStateList.Item>
    </UserStateList>
  </ProfileViewStyled>
);

export default ProfileView;
