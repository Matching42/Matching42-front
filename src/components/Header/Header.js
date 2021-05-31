import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './Header.styles';

const Header = props => {
  const { user } = props;

  return (
    <HeaderStyled>
      <Link to="/">
        <div>Logo</div>
      </Link>
      {user && <p>{user}</p>}
    </HeaderStyled>
  );
};

export default Header;
