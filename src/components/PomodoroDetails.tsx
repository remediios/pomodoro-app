import React from 'react';
import { secondsToTime } from '../utils/secondsToTime';

interface Props {
  completedCycles: number;
  fullWorkingTime: number;
  numberOfPomodoros: number;
}
function PomodoroDetails({
  completedCycles,
  fullWorkingTime,
  numberOfPomodoros,
}: Props) {
  return (
    <div className="details">
      <p>
        {completedCycles}
        <br />
        <span className="details-label">Cycles</span>
      </p>
      <p>
        {secondsToTime(fullWorkingTime)}
        <br />
        <span className="details-label">Working Time</span>
      </p>
      <p>
        {numberOfPomodoros}
        <br />
        <span className="details-label">Pomodoros</span>
      </p>
    </div>
  );
}

export default PomodoroDetails;
