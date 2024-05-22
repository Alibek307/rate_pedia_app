import ky from 'ky';
import { useSessionStore } from '../';

export const api = () =>
  ky.create({
    prefixUrl: 'http://10.0.2.2:5000/api/',
    headers: {
      Authorization: `Bearer ${useSessionStore.getState().token}`,
    },
  });
