import { Input } from 'antd';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { usePomodoroContext } from '../contexts/PomodoroContext';

interface Props {
  options: {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
  };
  setOptions: Dispatch<
    SetStateAction<{
      pomodoroTime: number;
      shortRestTime: number;
      longRestTime: number;
      cycles: number;
    }>
  >;
}

function SettingsControls({ options, setOptions }: Props): JSX.Element {
  const { pOptions } = usePomodoroContext();

  const [pomodoroTime, setPomodoroTime] = useState(pOptions.pomodoroTime);
  const [shortRestTime, setShortRestTime] = useState(pOptions.shortRestTime);
  const [longRestTime, setLongRestTime] = useState(pOptions.longRestTime);
  const [cycles, setCycles] = useState(pOptions.cycles);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'pomodoroTime':
        setPomodoroTime(Number(e.target.value));
        break;
      case 'shortRestTime':
        setShortRestTime(Number(e.target.value));
        break;
      case 'longRestTime':
        setLongRestTime(Number(e.target.value));
        break;
      case 'cycles':
        setCycles(Number(e.target.value));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setOptions({
      pomodoroTime,
      shortRestTime,
      longRestTime,
      cycles,
    });
  }, [pomodoroTime, shortRestTime, longRestTime, cycles]);

  return (
    <div className="settings-controls">
      <div className="settings-control">
        <p>Default Time:</p>
        <Input
          className="settings-control-unit"
          placeholder="Default Time"
          name="pomodoroTime"
          value={options.pomodoroTime}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="settings-control">
        <p>Short Rest Time:</p>
        <Input
          className="settings-control-unit"
          placeholder="Short Rest Time"
          name="shortRestTime"
          value={options.shortRestTime}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="settings-control">
        <p>Long Rest Time:</p>
        <Input
          className="settings-control-unit"
          placeholder="Long Rest Time"
          name="longRestTime"
          value={options.longRestTime}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="settings-control">
        <p>Cycles:</p>
        <Input
          className="settings-control-unit"
          placeholder="Cycles"
          name="cycles"
          value={options.cycles}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
}

export default SettingsControls;
