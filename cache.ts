import AsyncStorage from "@react-native-async-storage/async-storage";

const CACHE_KEY = "NotificationEnabled";

export const notificationCache = {
  setEnabled: async (enabled: boolean) => {
    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(enabled));
  },

  getEnabled: async () => {
    const value = await AsyncStorage.getItem(CACHE_KEY);

    return value === null ? false : value !== null ? JSON.parse(value) : null;
  },
};
