import reactSizes from 'react-sizes';

const withSizes = component => {
  const { width } = component;
  let device = 'desktop';
  if (!width) {
    device = 'ssr';
  } else if (width <= 576) {
    device = 'phone';
  } else if (width <= 768) {
    device = 'tablet';
  }
  return {
    device,
  };
};

export default reactSizes(withSizes);
