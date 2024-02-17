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
  const { pOptions, setPOptions } = usePomodoroContext();

  const [pomodoroTime, setPomodoroTime] = useState(pOptions.pomodoroTime);
  const [shortRestTime, setShortRestTime] = useState(pOptions.shortRestTime);
  const [longRestTime, setLongRestTime] = useState(pOptions.longRestTime);
  const [cycles, setCycles] = useState(pOptions.cycles);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'pomodoroTime':
        // setPomodoroTime(Number(e.target.value));
        setPOptions({ ...pOptions, pomodoroTime: Number(e.target.value) });
        break;
      case 'shortRestTime':
        // setShortRestTime(Number(e.target.value));
        setPOptions({ ...pOptions, shortRestTime: Number(e.target.value) });
        break;
      case 'longRestTime':
        // setLongRestTime(Number(e.target.value));
        setPOptions({ ...pOptions, longRestTime: Number(e.target.value) });
        break;
      case 'cycles':
        // setCycles(Number(e.target.value));
        setPOptions({ ...pOptions, cycles: Number(e.target.value) });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (pOptions.cycles < 0) return;
    console.log(pOptions);
  }, [pomodoroTime, shortRestTime, longRestTime, cycles]);

  return (
    <div className="settings-controls">
      <div className="settings-control">
        <p>Default Time:</p>
        <Input
          className="settings-control-unit"
          placeholder="Default Time"
          name="pomodoroTime"
          value={pOptions.pomodoroTime}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="settings-control">
        <p>Short Rest Time:</p>
        <Input
          className="settings-control-unit"
          placeholder="Short Rest Time"
          name="shortRestTime"
          value={pOptions.shortRestTime}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="settings-control">
        <p>Long Rest Time:</p>
        <Input
          className="settings-control-unit"
          placeholder="Long Rest Time"
          name="longRestTime"
          value={pOptions.longRestTime}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="settings-control">
        <p>Cycles:</p>
        <Input
          className="settings-control-unit"
          placeholder="Cycles"
          name="cycles"
          value={pOptions.cycles}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
}

export default SettingsControls;
