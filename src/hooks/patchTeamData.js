import useSWR from 'swr';
import { api } from '../api';

export const patchTeamData = (teamID, changeState) => {
  const updateTeamData = useSWR(['updateTeamData', teamID, changeState], (_, teamID, changeState) =>
    api
      .patch(`team/${teamID}`, changeState)
      .then(res => res.data.data)
      .catch(error => console.log(error))
  );
  return { updateTeamData };
};
