import React, { useRef } from 'react';
import { useOverlay, usePreventScroll, useModal } from '@react-aria/overlays';
import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import { DialogStyled } from './Dialog.styles';

const Dialog = props => {
  const { children } = props;
  const ref = useRef();
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  usePreventScroll();

  const { modalProps } = useModal();
  const { dialogProps } = useDialog(props, ref);

  return (
    <DialogStyled {...underlayProps}>
      <FocusScope contain restoreFocus autoFocus>
        <DialogStyled.Box {...overlayProps} {...dialogProps} {...modalProps} ref={ref}>
          {children}
        </DialogStyled.Box>
      </FocusScope>
    </DialogStyled>
  );
};

export default Dialog;
