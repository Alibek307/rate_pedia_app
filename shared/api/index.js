import ky from 'ky';
import { useSessionStore } from '../';

export const api = () =>
  ky.create({
    prefixUrl: 'http://ratepedia.info/api/',
    headers: {
      Authorization: `Bearer ${useSessionStore.getState().token}`,
    },
  });