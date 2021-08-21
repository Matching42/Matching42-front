import useSWR from 'swr';
import { api } from '../api';

export const useUserData = userId => {
  const getUserData = useSWR(['getUserData', userId], (_, userId) =>
    api
      .get(`user/${userId}`)
      .then(res => res.data)
      .catch(error => {
        console.log(error);
        throw error;
      })
  );

  return { getUserData };
};

export const useTeamData = teamID => {
  const ID = teamID !== undefined ? teamID : '';
  const getTeamData = useSWR(['getTeamData', teamID], (_, teamID) =>
    api
      .get(`team/${ID}`)
      .then(res => res.data)
      .catch(error => {
        console.log(error);
        throw error;
      })
  );

  return { getTeamData };
};

export const useTeamSubjectLink = subject => {
  const getTeamSubjectLink = useSWR(['getTeamSubjectLink', subject], (_, subject) =>
    api
      .get(`subjectPDF/${subject}`)
      .then(res => res.data)
      .catch(error => {
        console.log(error);
        throw error;
      })
  );

  return { getTeamSubjectLink };
};
