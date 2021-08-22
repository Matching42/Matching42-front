import React, { useEffect } from 'react';
import ToastStyled, { IconWrap } from './Toast.styles';
import { ReactComponent as CheckIcon } from '../../assets/icons/icon-check.svg';
import { ReactComponent as ErrorIcon } from '../../assets/icons/icon-error.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/icon-info.svg';
import { ReactComponent as WarningIcon } from '../../assets/icons/icon-warning.svg';

const Toast = ({ setIsActive, type, message }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  }, []);

  const TypeSwitch = () => {
    let icon;
    if (type === 'check') {
      icon = <CheckIcon />;
    } else if (type === 'error') {
      icon = <ErrorIcon />;
    } else if (type === 'info') {
      icon = <InfoIcon />;
    } else if (type === 'warning') {
      icon = <WarningIcon />;
    }
    return icon;
  };

  const bgColor = type => {
    let color;
    if (type === 'check') {
      color = '#74b474';
    } else if (type === 'info') {
      color = '#5aaac2';
    } else if (type === 'warning') {
      color = '#f7a838';
    } else if (type === 'error') {
      color = '#ca5c59';
    }
    return color;
  };

  return (
    <ToastStyled type={type} bgColor={bgColor(type)}>
      <IconWrap>{TypeSwitch()}</IconWrap>
      {message}
    </ToastStyled>
  );
};

export default Toast;
