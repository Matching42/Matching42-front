import useSWR from 'swr';
import { api } from '../api';

export const useUserData = userId => {
  const getUserData = useSWR(['getUserData', userId], (_, userId) =>
    api
      .get(`user/${userId}`)
      .then(res => res.data.data)
      .catch(error => console.log(error))
  );

  return { getUserData };
};

export const useTeamData = (teamID) => {
  const getTeamData = useSWR(['getTeamData', teamID], (_, teamID) =>
    api
      .get(`team/${teamID}`)
      .then(res => res.data.data)
      .catch(error => console.log(error))
  );

  return { getTeamData };
};
