import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import Button from './Button';
import Timer from './Timer';

interface Props {
  defaultPomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}
function PomodoroTimer({ defaultPomodoroTime }: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);
  useInterval(() => {
    if (mainTime === 0) return;
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer time={mainTime} />
      <div className="controls">
        <Button text="test" onClick={() => console.log('test')} />
        <Button text="test" onClick={() => console.log('test')} />
        <Button text="test" onClick={() => console.log('test')} />
      </div>
      <div className="details">
        <p>Test: asdasdad</p>
        <p>Test: asdasdad</p>
        <p>Test: asdasdad</p>
        <p>Test: asdasdad</p>
      </div>
    </div>
  );
}

export default PomodoroTimer;
