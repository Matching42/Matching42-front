import { useSWRInfinite } from 'swr';
import { api } from '../api';

export const useFetchTeamListData = subject => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `team?page=${pageIndex}&limit=5&progress=true${subject !== 'Subject' ? `&subject=${subject}` : ''}`;
  };

  const teamListData = useSWRInfinite(getKey, getKey =>
    api
      .get(getKey)
      .then(res => res.data.data)
      .catch(error => {
        console.log(error);
        throw error;
      })
  );

  const teamsData = teamListData.data ?? [];
  const teams = [];

  teamsData &&
    teamsData.forEach(results => {
      teams.push(...results);
    });

  return { teams, teamListData, isValidating: teamListData.isValidating };
};
