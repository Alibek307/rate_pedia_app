import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSessionStore = create()(
  persist(
    () => ({
      token: undefined,
      user: undefined,
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      logout: () => set({ token: undefined, user: undefined }),
    }),
    {
      name: 'session',
      getStorage: () => AsyncStorage,
    },
  ),
);

export const hasPermission = (permission) => {
  const permissions = useSessionStore.getState().user?.permissions;
  if (!permissions) return false;

  return Boolean(permissions[permission]);
};
