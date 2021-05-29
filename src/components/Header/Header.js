import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyled from './Header.styles';

const Header = props => {
  const { user } = props;

  return (
    <HeaderStyled>
      <Link to="/">
        <div>Logo Test</div>
      </Link>
      <p>{user}</p>
    </HeaderStyled>
  );
};

Header.defaultProps = {
  user: 'jiwonlee'
};

export default Header;
