import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PomodoroProvider from './providers/PomodoroProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <PomodoroProvider>
      <App />
    </PomodoroProvider>
  </React.StrictMode>,
);
