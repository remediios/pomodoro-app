import React from 'react';
import PomodoroTimer from './components/PomodoroTimer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={5}
        shortRestTime={1}
        longRestTime={4}
        cycles={4}
      />
    </div>
  );
}

export default App;
