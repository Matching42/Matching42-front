import React from 'react';
import LoginSectionView from '../components/LoginSectionView/LoginSectionView';

const LoginPage = () => {
  const handleLoginButtonClick = () => {
    window.location.replace('https://gentle-tor-36751.herokuapp.com/login/42');
  };

  return <LoginSectionView onLoginButtonClick={handleLoginButtonClick} />;
};

export default LoginPage;
