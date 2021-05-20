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

export const useTeamData = teamId => {
	const getTeamData = useSWR(['getTeamData', teamId], (_, teamId) => {
    api
      .get(`team/${teamId}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  });

  return { getTeamData };
}