import React, { useEffect, useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import Button from './Button';
import Timer from './Timer';
import bellStart from '../sounds/bell-start.mp3';
import bellFinish from '../sounds/bell-finish.mp3';
import PomodoroDetails from './PomodoroDetails';
import PomodoroHeader from './PomodoroHeader';

const audioStartWorking = new Audio(bellStart);
const audioFinishWorking = new Audio(bellFinish);

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}
function PomodoroTimer({
  pomodoroTime,
  shortRestTime,
  longRestTime,
  ...props
}: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);

  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [restingMode, setRestingMode] = useState('');

  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(props.cycles - 1).fill(true),
  );

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
  );

  const handleWorkConfig = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(pomodoroTime);
    audioStartWorking.play();
  };

  const handleRestConfig = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    setRestingMode(long ? 'long-rest' : 'short-rest');
    if (long) {
      document.body.classList.add('restingLong');
      setMainTime(longRestTime);
    } else {
      setMainTime(shortRestTime);
    }
    audioFinishWorking.play();
  };

  useEffect(() => {
    if (working) {
      document.body.classList.remove('restingLong');
      document.body.classList.remove('restingShort');
      document.body.classList.add('working');
    }
    if (resting) {
      document.body.classList.remove('working');
      if (restingMode === 'short-rest')
        document.body.classList.add('restingShort');
    }

    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      handleRestConfig(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      handleRestConfig(true);
      setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) handleWorkConfig();
  }, [working, resting, mainTime]);

  return (
    <div className="pomodoro">
      <PomodoroHeader working={working} restingMode={restingMode} />
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
      <PomodoroDetails
        completedCycles={completedCycles}
        fullWorkingTime={fullWorkingTime}
        numberOfPomodoros={numberOfPomodoros}
      />
    </div>
  );
}

export default PomodoroTimer;
