import useSWR from 'swr';
import { api } from '../api';

export const useStateData = () => {
  const getMatchingStateData = useSWR('getMatchingStateData', () =>
    api
      .get(`waitlist/`)
      .then(res => res.data)
      .catch(error => console.log(error))
  );

  return { getMatchingStateData };
};
