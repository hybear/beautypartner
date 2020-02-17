import Lottie from 'react-lottie';
import SpinAnimation from './spin.json';

const SpinLoad = ({ isStoped }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SpinAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} height={100} width={100} isStopped={isStoped} isPaused={isStoped} />;
};

export default SpinLoad;
