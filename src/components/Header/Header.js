import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled, { LogoStyled } from './Header.styles';
import logo from '../../assets/images/42_logo.svg';

const Header = props => {
  const { user } = props;
  return (
    <HeaderStyled>
      <Link to="/">
        <LogoStyled><img src={logo} alt="logo" width='58'/></LogoStyled>
      </Link>
      <p>{user}</p>
    </HeaderStyled>
  );
};

Header.defaultProps = {
  user: ''
};

export default Header;
