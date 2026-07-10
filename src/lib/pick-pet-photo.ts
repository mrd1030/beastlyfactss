import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

/**
 * Opens the device photo library and returns a local URI for the picked
 * image, or null if the user cancelled, denied permission, or the picker
 * threw. expo-image-picker has web support (it opens a native file input
 * there), so unlike expo-notifications this doesn't need a hard web
 * no-op — but permission requests and the picker call are still
 * try/caught so a denied/unavailable library degrades to "no photo"
 * picked instead of crashing the Add/Edit Pet form.
 */
export async function pickPetPhoto(): Promise<string | null> {
  try {
    if (Platform.OS !== 'web') {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) return null;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.7,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (result.canceled || !result.assets?.length) return null;
    return result.assets[0].uri;
  } catch (err) {
    console.warn('[pick-pet-photo] Could not open the image picker', err);
    return null;
  }
}
