import { NativeModules, Platform } from 'react-native';

const { StatusBarManager } = NativeModules;

const TOP_OFFSET = Platform.select({
  ios: StatusBarManager.HEIGHT || 50,
  android: 15
});

export { TOP_OFFSET };
