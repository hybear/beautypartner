import Lottie from 'react-lottie';
import CheckedAnimation from './checked.json';

const Checked = ({ isStoped }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: CheckedAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} height={80} width={80} isStopped={isStoped} isPaused={isStoped} />;
};

export default Checked;
