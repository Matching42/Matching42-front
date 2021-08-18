import React, {useState} from 'react';
import ToastStyled from './Toast.styles';

const Toast = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <ToastStyled/>
    );
}

export default Toast;
