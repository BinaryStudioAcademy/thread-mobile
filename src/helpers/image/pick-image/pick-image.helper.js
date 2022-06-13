import { launchImageLibrary } from 'react-native-image-picker';

export const pickImage = async () => {
  const res = await launchImageLibrary({
    mediaType: 'image',
    includeBase64: true
  });

  return res.assets ? res.assets[0] : null;
};
