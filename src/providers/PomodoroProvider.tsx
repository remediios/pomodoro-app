import React, { ReactNode, useState } from 'react';
import PomodoroContext from '../contexts/PomodoroContext';
import {
  PomodoroOptions,
  defaultPomodoroOptions,
} from '../utils/pomodoroOptions';

interface PomodoroProvider {
  children: ReactNode;
}

const PomodoroProvider: React.FC<PomodoroProvider> = ({ children }) => {
  localStorage.setItem(
    'pomodoroOptions',
    JSON.stringify(defaultPomodoroOptions),
  );

  const storedData: PomodoroOptions | null = JSON.parse(
    localStorage.getItem('pomodoroOptions') ?? 'null',
  );

  const [pOptions, setPOptions] = useState<PomodoroOptions>(
    storedData ?? defaultPomodoroOptions,
  );

  const value = {
    pOptions,
    setPOptions,
  };

  return (
    <PomodoroContext.Provider value={value}>
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroProvider;
