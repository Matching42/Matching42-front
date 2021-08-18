import React, { useEffect } from 'react';
import ToastStyled from './Toast.styles';
import { ReactComponent as check } from '../../assets/icons/icon-check.svg';
import { ReactComponent as error } from '../../assets/icons/icon-error.svg';
import { ReactComponent as info } from '../../assets/icons/icon-info.svg';
import { ReactComponent as warning } from '../../assets/icons/icon-warning.svg';

const Toast = ({isActive, setIsActive, type, message}) => {
  console.log("toast", type);
  useEffect(() => {
    if (isActive === true)
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
  });

  const typeSwitch = () => {
    switch (type) {
      case "check":
        return check;
      case "error":
        return error;
      case "info":
        return info;
      case "warning":
        return warning;
      default:
        break;
    }
  } 

  const bgColor = (type) => {
    let color;
    if (type === "check") {
      color = "#74b474";
    } else if (type === "info") {
      color = "#5aaac2";
    } else if (type === "warning") {
      color = "#f7a838";
    } else if (type === "error") {
      color = "#ca5c59";
    }
    return color;
  }

  return (
    <ToastStyled show={isActive} type={type} bgColor={bgColor(type)}>
      {/* {typeSwitch(type)} */}
      {message}
    </ToastStyled>
  );
}

export default Toast;
