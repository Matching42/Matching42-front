import { useSWRInfinite } from 'swr';
import api from '../api';

// 더미데이터
const dummy = Array.from({ length: 100 }).map((_, i) => ({
  ID: i,
  leaderId: 'seolim',
  memberId: ['seolim', 'kwlee', 'snpark'],
  tags: ['낮', '온라인', '매일 2시간'],
  subject: 'cub3d',
  state: 'progress',
  notionLink: '',
  gitLink: '',
  teamName: '1번팀',
  startDate: 'D +21'
}));

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

// api 구현되면 Data Fetching 기능으로 바뀔 예정 page, limit 제거
// hooks 폴더로 이동 예정
export const fetchData = async url => {
  const page = Number(url);
  const limit = 5;
  await sleep();
  return dummy.slice(page * limit, (page + 1) * limit);
};

export const useFetchTeamListData = () => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null; // reached the end
    return `${pageIndex}`;
    // return `/users?page=${pageIndex}&limit=5`;                    // SWR key, API 구현되면 url 반환으로 변경
  };

  const teamListData = useSWRInfinite(getKey, fetchData);

  const teamsData = teamListData.data ?? [];
  const teams = [];

  teamsData.forEach(results => {
    teams.push(...results);
  });
  return { teams, teamListData };
};
