import React from 'react';
import { secondsToMinutes } from '../utils/secondsToMinutes';

interface Props {
  time: number;
}
function Timer({ time }: Props): JSX.Element {
  return <div className="timer">{secondsToMinutes(time)}</div>;
}

export default Timer;
