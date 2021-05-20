import React from 'react';
import { ProfileViewStyled, Title, Description, UserStateList, UserStateItem } from './ProfileView.styles';

const ProfileView = () => 
    <ProfileViewStyled>
        <Title>Hello, seomoon !</Title>
        <Description>오늘 하루도 힘차게 달려볼까요?<br/>오른쪽 상단의 매칭 신청하기 버튼을 눌러 시작해보세요!</Description>
        <UserStateList>
            <UserStateItem>Level: 2 - 30%</UserStateItem>
            <UserStateItem>Black Hole : 106 days left</UserStateItem>
        </UserStateList>
    </ProfileViewStyled>;

export default ProfileView;
