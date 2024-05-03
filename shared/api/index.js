import ky from "ky";
import * as SecureStore from 'expo-secure-store'

export const api = () =>
  ky.create({
    prefixUrl: "http://192.168.1.223:5000/api/",
    headers: {
      Authorization: `Bearer ${SecureStore.getItem('token')}`,
    },
    
  });
