import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Platform } from 'react-native';

export function isWidgetsSupportedEnvironment(): boolean {
  if (Platform.OS !== 'ios') {
    return false;
  }

  if (Constants.executionEnvironment === ExecutionEnvironment.StoreClient) {
    return false;
  }

  return true;
}
