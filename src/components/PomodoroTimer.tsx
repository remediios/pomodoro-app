import React, { useEffect, useState } from 'react';
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
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
  }, [working]);

  useInterval(
    () => {
      if (mainTime === 0) return;
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const handleWorkConfig = () => {
    setTimeCounting(true);
    setWorking(true);
  };

  return (
    <div className="pomodoro">
      <h2>You are: resting</h2>
      <Timer time={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={handleWorkConfig} />
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
