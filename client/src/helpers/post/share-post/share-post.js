import { Share } from 'react-native';

const sharePost = ({ body, image }) => {
  const imageString = image ? `\n${image.link}` : '';

  return Share.share({
    title: 'Thread',
    message: `${body}${imageString}`
  });
};

export { sharePost };
