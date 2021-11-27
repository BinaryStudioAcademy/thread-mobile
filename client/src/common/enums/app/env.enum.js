import { Platform } from 'react-native';
import Config from 'react-native-config';

const { API_URL_IOS, API_URL_ANDROID } = Config;

const ENV = {
  API_URL: Platform.select({
    ios: API_URL_IOS,
    android: API_URL_ANDROID
  })
};

export { ENV };
