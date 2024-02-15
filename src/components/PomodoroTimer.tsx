import React, { useEffect, useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import Button from './Button';
import Timer from './Timer';
import bellStart from '../sounds/bell-start.mp3';
import bellFinish from '../sounds/bell-finish.mp3';

const audioStartWorking = new Audio(bellStart);
const audioFinishWorking = new Audio(bellFinish);

interface Props {
  defaultPomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}
function PomodoroTimer({
  defaultPomodoroTime,
  shortRestTime,
  longRestTime,
  cycles,
}: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
  }, [working, resting]);

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
    setResting(false);
    setMainTime(defaultPomodoroTime);
    audioStartWorking.play();
  };

  const handleRestConfig = (long: boolean) => {
    setTimeCounting(true);
    setResting(true);
    if (long) setMainTime(longRestTime);
    else setMainTime(shortRestTime);
    audioFinishWorking.play();
  };

  return (
    <div className="pomodoro">
      <h2>You are: resting</h2>
      <Timer time={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={handleWorkConfig} />
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCounting ? 'Pause' : 'Start'}
          onClick={() => setTimeCounting(!timeCounting)}
        />
        <Button text="Rest" onClick={() => handleRestConfig(false)} />
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
