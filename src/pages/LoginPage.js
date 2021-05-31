import React from 'react';
import Header from '../components/Header/Header';
import LoginSectionView from '../components/LoginSectionView/LoginSectionView';

const LoginPage = () => {
  const handleLoginButtonClick = () => {
    console.log('click!');
  };

  return (
    <>
      <Header />
      <LoginSectionView onLoginButtonClick={handleLoginButtonClick} />
    </>
  );
};

export default LoginPage;
