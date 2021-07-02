import { useSWRInfinite } from 'swr';
import { api } from '../api';

export const useFetchTeamListData = () => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `team?page=${pageIndex}&limit=5&progress=true`;
  };

  const teamListData = useSWRInfinite(getKey, getKey =>
    api
      .get(getKey)
      .then(res => res.data.data)
      .catch(error => console.log(error))
  );

  const teamsData = teamListData.data ?? [];
  const teams = [];

  teamsData &&
    teamsData.forEach(results => {
      teams.push(...results);
    });

  return { teams, teamListData };
};
