import React from 'react';
import { secondsToTime } from '../utils/secondsToTime';

interface Props {
  time: number;
}
function Timer({ time }: Props): JSX.Element {
  return <div className="timer">{secondsToTime(time)}</div>;
}

export default Timer;
