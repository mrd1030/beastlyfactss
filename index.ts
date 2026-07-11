import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Platform } from 'react-native';

import 'expo-router/entry';

if (Platform.OS === 'android' && Constants.executionEnvironment !== ExecutionEnvironment.StoreClient) {
  void import('./src/widgets/android-home-widgets')
    .then((module) => {
      module.registerAndroidHomeWidgetTaskHandler();
    })
    .catch(() => {});
}
