import React, { useEffect, useRef } from 'react';
import { useUserData } from '../../hooks/useUserData';
import { UserImageStyled } from '../TeamListItem/common/TeamImage/TeamImage.styles';
import { LogoutStyled } from './Logout.styles';

const Logout = ({ user, isVisible, setIsVisible, onLogoutButtonClick }) => {
  const { getUserData } = useUserData(user);

  const modalRef = useRef();

  const handleClickOutside = ({ target }) => {
    if (isVisible && !modalRef.current?.contains(target)) {
      setIsVisible(false);
    }
  };

  const handleLogoutButtonClick = () => {
    onLogoutButtonClick?.();
  };

  const getDday = date => {
    const nowDate = new Date().getTime();
    const blackholeDate = Date.parse(date);
    const milliseconds = blackholeDate - nowDate;
    const days = milliseconds / 1000 / 60 / 60 / 24;

    return Math.floor(days);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <LogoutStyled ref={modalRef}>
      <div className="bubble">
        <LogoutStyled.UserWrap>
          <UserImageStyled size="big" src={`https://cdn.intra.42.fr/users/small_${user}.jpg`} />
          <LogoutStyled.UserInfo>
            <h2>{getUserData.data?.user.ID}</h2>
            <p>
              Level: {getUserData.data?.user.intraInfo.level}% | {user && getDday(getUserData.data?.user.intraInfo.blackholed_at)} days left
            </p>
          </LogoutStyled.UserInfo>
        </LogoutStyled.UserWrap>
        <LogoutStyled.Button onClick={handleLogoutButtonClick}>로그아웃</LogoutStyled.Button>
      </div>
    </LogoutStyled>
  );
};

export default Logout;
