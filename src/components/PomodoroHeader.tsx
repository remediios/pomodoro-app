import React from 'react';

interface Props {
  working: boolean;
  restingMode: string;
}

function PomodoroHeader({ working, restingMode }: Props): JSX.Element {
  const modeLabel = working
    ? 'WORKING'
    : restingMode === 'short-rest'
    ? 'SHORT REST'
    : restingMode === 'long-rest'
    ? 'LONG REST'
    : 'TIME TO FOCUS!';

  return (
    <div>
      <h2>{modeLabel}</h2>
    </div>
  );
}

export default PomodoroHeader;
