import React from 'react';
import LoginSectionView from '../components/LoginSectionView/LoginSectionView';

const LoginPage = () => {
  const handleLoginButtonClick = () => {
    window.location.replace(`${process.env.REACT_APP_API_URL}/login/42`);
  };

  return <LoginSectionView onLoginButtonClick={handleLoginButtonClick} />;
};

export default LoginPage;
