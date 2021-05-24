import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './Header.styles';
import logo from '../img/42_logo.svg';

const Header = props => {
  const { user } = props;

  return (
    <HeaderStyled>
      <Link to="/">
        <div><img src={logo} alt="logo" width='58'/></div>
      </Link>
      <p>{user}</p>
    </HeaderStyled>
  );
};

Header.defaultProps = {
  user: ''
};

export default Header;
