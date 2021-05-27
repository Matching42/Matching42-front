import React, { useState, useEffect, useRef } from 'react';
import { useSWRInfinite } from 'swr';
import { TeamListViewStyled, TeamListTopbarStyled, TopbarBtnStyled, TeamListContainerStyled } from './TeamListView.styles';
import TeamListItemView from '../TeamListItemView/TeamListItemView';
import { Dropdown } from './Dropdown'
import { WaitToggleButton } from './WaitToggleButton';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
	return `${pageIndex}`;
  // return `/users?page=${pageIndex}&limit=5`;                    // SWR key, API 구현되면 url 반환으로 변경
}

// 더미데이터
const dummy = Array.from({ length: 100 }).map((_, i) => 
	({
		ID: i,
		leaderId: "seolim",
		memberId: ["seolim", "kwlee", "snpark"],
		subject: "cub3d",
		state: "progress",
		notionLink: "",
		gitLink: "",
		teamName: "1번팀",
		startDate: "D +21"})
);

const sleep = () => (new Promise(resolve => setTimeout(resolve, 1000)));

// api 구현되면 Data Fetching 기능으로 바뀔 예정 page, limit 제거
// hooks 폴더로 이동 예정
export const fetchData = async (url) => {
	const page = Number(url);
	const limit = 5;
	await sleep();
	return dummy.slice(page * limit, (page + 1) * limit);
}

const TeamListView = () => {

	const { data, setSize } = useSWRInfinite(getKey, fetchData);
	const [target, setTarget] = useState(null);
	
	const observer = useRef(
		new IntersectionObserver((entires) => {
			const first = entires[0];
			if (first.isIntersecting) {
				setSize(size => size + 1);
			}
		}, {
			threshold: 0.5
		})
	);

	useEffect(() => {
		const currentElement = target;
		const currentObserver = observer.current;

		if (currentElement) {
			currentObserver.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				currentObserver.unobserve(currentElement);
			}
		};
	}, [target]);

	const teams = data ? [].concat(...data) : [];

	return (
		<TeamListViewStyled>
			<TeamListTopbarStyled>
				<span>Team List 23건</span>
				<TopbarBtnStyled>
					<Dropdown />
					<WaitToggleButton />
				</TopbarBtnStyled>
			</TeamListTopbarStyled>
			<TeamListContainerStyled>
				{
					teams.map((team, index) => 
						<TeamListItemView key={index} subject={team.subject} startDate={team.startDate} />
					)
				}
				{
					data && <div ref={setTarget} style={{height: "10px"}}/>
				}
			</TeamListContainerStyled>
		</TeamListViewStyled>
	);
}

export default TeamListView;
