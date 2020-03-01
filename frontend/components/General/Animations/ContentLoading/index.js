import React from 'react';
import Lottie from 'react-lottie';
import LoadingAnimation from './loading.json';

const LoadingComponent = ({ isStoped }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} height={200} width={200} isStopped={isStoped} isPaused={isStoped} />;
};

export default LoadingComponent;
