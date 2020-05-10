import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (storage_Key, value) => {
  try {
    await AsyncStorage.setItem(storage_Key, value);
    return true;
  } catch (e) {
    console.log(`Error while storing, value: ${value} in: ${storage_Key}`);
    console.log(e);
    return false;
  }
  return true;
}

export const getData = async(storage_Key) => {
  try {
      const value = await AsyncStorage.getItem(storage_Key)
      return value
  } catch(e) {
    console.log(`Error while getting, ${storage_Key}`);
    console.log(e);
    return null;
  }
}

export const removeKey = async(storage_Key) => {
  try {
      const value = await AsyncStorage.removeItem(storage_Key)
      return
  } catch(e) {
    console.log(`Error while deleting, ${storage_Key}`);
    console.log(e);
    return;
  }
}

const HelperAsyncStorage = {
  storeData: storeData,
  getData: getData,
  removeKey: removeKey
};

export default HelperAsyncStorage;