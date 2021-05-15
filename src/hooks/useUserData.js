import useSWR from 'swr';
import api from '../api';

export const useUserData = userId => {
  const getUserData = useSWR(['getUserData', userId], (_, userId) => {
    api
      .get(`users/${userId}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  });

  return { getUserData };
};
