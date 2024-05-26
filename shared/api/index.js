import ky from 'ky';
import { useSessionStore } from '../';

export const api = () =>
  ky.create({
    prefixUrl: 'http://104.248.28.29:5000/api/',
    headers: {
      Authorization: `Bearer ${useSessionStore.getState().token}`,
    },
  });