import React, {useEffect} from 'react';
import ToastStyled from './Toast.styles';

const Toast = ({isActive, setIsActive, type, message}) => {
    useEffect(() => {
        if (isActive === true)
            setTimeout(() => {
                setIsActive(false);
            }, 3000);
    });
    return (
        <ToastStyled show={isActive} type={type}>
            <ToastStyled.Icon />
            {message}
        </ToastStyled>
    );
}

export default Toast;
