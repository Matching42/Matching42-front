import useSWR from 'swr';
import { api } from '../api';

export const useStateData = () => {
  const getMatchingStateData = useSWR('getMatchingStateData', () =>
    api
      .get(`waitlist/`)
      .then(res => res.data)
      .catch(error => {
        const response = error.response.data;
        console.warn(response);
        throw response;
      })
  );

  return { getMatchingStateData };
};
