import { launchImageLibrary } from 'react-native-image-picker';

export const pickImage = async () => {
  const res = await launchImageLibrary({ mediaType: 'image' });

  return res.assets ? res.assets[0] : null;
};
