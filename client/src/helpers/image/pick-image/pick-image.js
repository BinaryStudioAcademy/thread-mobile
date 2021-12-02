import { launchImageLibrary } from 'react-native-image-picker';

export const pickImage = () => launchImageLibrary({ mediaType: 'image' }).then(res => res.assets[0]);
