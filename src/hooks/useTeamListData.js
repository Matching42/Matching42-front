import { useSWRInfinite } from 'swr';
import api from '../api';

// 더미데이터
const dummy = Array.from({ length: 100 }).map((_, i) => {
	if (i % 3 === 0) {
		return (
			{
				ID: i,
				leaderID: 'hokim',
				memberID: ['hyeokim', 'kwlee', 'snpark', 'seolim'],
				tags: ['밤', '오프라인', '매일 2시간', 'pdf숙지', '오프라인 모임'],
				subject: 'minishell',
				state: 'progress',
				notionLink: '',
				gitLink: '',
				teamName: '1번팀',
				startDate: new Date(2021, 5, 20)
			}
		)
	}
	if (i % 2 === 0) {
		return (
			{
				ID: i,
				leaderID: 'jiwonlee',
				memberID: ['seomoon', 'sulee', 'jongkim'],
				tags: ['낮', '온라인', '매일 2시간', 'pdf 숙지', '비대면'],
				subject: 'webserv',
				state: 'progress',
				notionLink: '',
				gitLink: '',
				teamName: '1번팀',
				startDate: new Date(2021, 5, 27)
			}
		)
	} 
	return (
		{
			ID: i,
			leaderID: 'minjakim',
			memberID: ['snpark', 'jongkim'],
			tags: ['새벽', '오프라인', '매일 24시간'],
			subject: 'cub3d',
			state: 'wait_member',
			notionLink: '',
			gitLink: '',
			teamName: '1번팀',
			startDate: new Date(2021, 4, 30)
		}
	)
})

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
