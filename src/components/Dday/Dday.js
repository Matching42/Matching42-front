import React from 'react';
import { DdayLight, DdayDark } from './Dday.styles';

const Dday = ({ mode, startDate }) => {
  const getDday = startDate => {
    const nowDate = new Date();
    const milliseconds = nowDate.getTime() - Date.parse(startDate);
    const days = milliseconds / 1000 / 60 / 60 / 24;

    return Math.floor(days);
  };

  if (mode === 'light') return <DdayLight>D +{getDday(startDate)}</DdayLight>;
  return <DdayDark>D +{getDday(startDate)}</DdayDark>;
};

export default Dday;
