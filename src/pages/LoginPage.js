import React from 'react';
import LoginSectionView from '../components/LoginSectionView/LoginSectionView';

const LoginPage = () => {
  const handleLoginButtonClick = () => {
    window.location.replace('http://matching42-dev-server.cf/login/42');
  };

  return <LoginSectionView onLoginButtonClick={handleLoginButtonClick} />;
};

export default LoginPage;
