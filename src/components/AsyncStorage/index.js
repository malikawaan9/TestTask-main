import AsyncStorage from '@react-native-async-storage/async-storage';
import {Log} from '../../util/utils';

export const storeAsyncObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    Log('AsyncStorage Error:', e);
  }
};

export const getAsyncObject = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    Log('AsyncStorage Error:', e);
  }
};
export const clearAsync = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
};
