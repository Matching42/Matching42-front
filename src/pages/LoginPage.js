import React from 'react';
import Header from '../components/Header/Header';
import LoginSectionView from '../components/LoginSectionView/LoginSectionView';

const LoginPage = () => {
  const handleLoginButtonClick = () => {
    window.location.replace('https://gentle-tor-36751.herokuapp.com/login/42');
  };

  return (
    <>
      <Header />
      <LoginSectionView onLoginButtonClick={handleLoginButtonClick} />
    </>
  );
};

export default LoginPage;
