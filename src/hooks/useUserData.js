import useSWR from 'swr';
import { api } from '../api';

export const useUserData = userId => {
  const getUserData = useSWR(['getUserData', userId], (_, userId) =>
    api
      .get(`user/${userId}`)
      .then(res => res.data)
      .catch(error => console.log(error))
  );

  return { getUserData };
};

export const useTeamData = teamID => {
  const path = teamID ? `team/${teamID}` : `team/`;

  const getTeamData = useSWR(['getTeamData', teamID], () =>
    api
      .get(path)
      .then(res => res.data)
      .catch(error => {
        const response = error.response.data;
        console.warn(response);
        throw response;
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
        const response = error.response.data;
        console.warn(response);
        throw response;
      })
  );

  return { getTeamSubjectLink };
};
