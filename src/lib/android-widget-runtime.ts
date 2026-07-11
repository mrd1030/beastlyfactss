import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Platform } from 'react-native';

export function isAndroidWidgetSupportedEnvironment(): boolean {
  return Platform.OS === 'android' && Constants.executionEnvironment !== ExecutionEnvironment.StoreClient;
}
