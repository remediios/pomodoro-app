import React, { ReactNode, useState } from 'react';
import PomodoroContext from '../contexts/PomodoroContext';

interface PomodoroProvider {
  children: ReactNode;
}

const PomodoroProvider: React.FC<PomodoroProvider> = ({ children }) => {
  const [pOptions, setPOptions] = useState({
    pomodoroTime: 1500,
    shortRestTime: 300,
    longRestTime: 900,
    cycles: 4,
  });

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
