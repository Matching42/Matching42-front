import React from 'react';
import { ProfileViewStyled, ProfileTitle, ProfileDescription, UserStateList } from './ProfileView.styles';

const ProfileView = ({ user }) => {
  const getDday = date => {
    const nowDate = new Date().getTime();
    const blackholeDate = Date.parse(date);
    const milliseconds = blackholeDate - nowDate;
    const days = milliseconds / 1000 / 60 / 60 / 24;

    return Math.floor(days);
  };

  const level = exp => +`${Math.round(`${exp}e+2`)}e-2`;

  return (
    <ProfileViewStyled>
      <ProfileTitle>Hello, {user?.ID} !</ProfileTitle>
      <ProfileDescription>
        오늘 하루도 힘차게 달려볼까요?
        <br />
        오른쪽 상단의 매칭 신청하기 버튼을 눌러 시작해보세요!
      </ProfileDescription>
      <UserStateList>
        <UserStateList.Item>Level: {user && +`${Math.round(`${user?.intraInfo.level}e+2`)}e-2`}%</UserStateList.Item>
        <UserStateList.Item>Black Hole : {user && getDday(user?.intraInfo.blackholed_at)} days left</UserStateList.Item>
      </UserStateList>
    </ProfileViewStyled>
  );
};

export default ProfileView;
