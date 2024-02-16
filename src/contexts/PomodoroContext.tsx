import { createContext, useContext, Dispatch, SetStateAction } from 'react';

interface PomodoroContext {
  pOptions: {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
  };
  setPOptions: Dispatch<
    SetStateAction<{
      pomodoroTime: number;
      shortRestTime: number;
      longRestTime: number;
      cycles: number;
    }>
  >;
}

const PomodoroContext = createContext<PomodoroContext | undefined>(undefined);

export const usePomodoroContext = (): PomodoroContext => {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error(
      'usePomodoroContext must be used within a Pomodoro Provider',
    );
  }
  return context;
};

export default PomodoroContext;
