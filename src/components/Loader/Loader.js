import React from 'react';
import Loader from 'react-loader-spinner';
import { LoaderWrap, Bubbles, LoaderWrap2 } from './Loader.styles'

const LoaderSpinner = () => (
  <LoaderWrap>
    <Loader type="Oval" color="#3d66ba" width={30} height={30} timeout={10000} />
  </LoaderWrap>
);

const LoaderBubble = () => (
  <Bubbles>
    <div className="bubble" />
    <div className="bubble" />
    <div className="bubble" />
  </Bubbles>
);

export { LoaderSpinner, LoaderBubble };
