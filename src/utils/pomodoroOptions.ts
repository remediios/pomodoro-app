export type PomodoroOptions = {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
};

export const defaultPomodoroOptions: PomodoroOptions = {
  pomodoroTime: 1500,
  shortRestTime: 300,
  longRestTime: 900,
  cycles: 4,
};
