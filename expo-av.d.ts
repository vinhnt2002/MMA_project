import { ExpoAVObject } from 'expo-av';
declare global {
  interface NativeModulesProxy {
    ExponentAV: ExpoAVObject;
  }
}