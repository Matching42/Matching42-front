import React from 'react';
import LoginSectionView from '../components/LoginSectionView/LoginSectionView';

const LoginPage = () => {
  const handleLoginButtonClick = () => {
    window.location.replace('https://matching42-server.cf/login/42');
  };

  return <LoginSectionView onLoginButtonClick={handleLoginButtonClick} />;
};

export default LoginPage;
