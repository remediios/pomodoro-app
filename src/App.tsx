import React from 'react';
import PomodoroTimer from './components/PomodoroTimer';
import { usePomodoroContext } from './contexts/PomodoroContext';

function App(): JSX.Element {
  const { pOptions } = usePomodoroContext();
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={pOptions.pomodoroTime}
        shortRestTime={pOptions.shortRestTime}
        longRestTime={pOptions.longRestTime}
        cycles={pOptions.cycles}
      />
    </div>
  );
}

export default App;
