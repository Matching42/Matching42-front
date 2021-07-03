import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './Header.styles';
import Logout from './Logout';
import { UserImageStyled } from '../TeamListItem/common/TeamImage/TeamImage.styles';
import { ReactComponent as Logo } from '../../assets/images/42_logo.svg';

const Header = props => {
  const { user, onLogoutButtonClick } = props;
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleLogoutForm = event => {
    setIsVisible(!isVisible);
    event.stopPropagation();
  };

  const handleLogoutButtonClick = () => {
    onLogoutButtonClick?.();
  };

  return (
    <HeaderStyled>
      <div className="logo">
        <Link to="/home">
          <Logo />
        </Link>
      </div>
      {user && (
        <>
          <HeaderStyled.Image>
            <UserImageStyled onClick={handleVisibleLogoutForm} key={1} size="big" src={`https://cdn.intra.42.fr/users/small_${user}.jpg`} />
          </HeaderStyled.Image>
          {isVisible && <Logout user={user} isVisible={isVisible} setIsVisible={setIsVisible} onLogoutButtonClick={handleLogoutButtonClick} />}
        </>
      )}
    </HeaderStyled>
  );
};

export default Header;
