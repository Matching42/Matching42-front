import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './Header.styles';
import { ReactComponent as Logo } from '../../assets/images/42_logo.svg';
import { UserImageStyled } from '../TeamListItem/common/TeamImage/TeamImage.styles';

const Header = props => {
  const { user } = props;

  return (
    <HeaderStyled>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {user && <UserImageStyled key={1} size="big" url={`https://cdn.intra.42.fr/users/small_${user.nickname}.jpg`} />}
    </HeaderStyled>
  );
};

export default Header;
