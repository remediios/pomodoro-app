import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { FaGear } from 'react-icons/fa6';
import { usePomodoroContext } from '../contexts/PomodoroContext';
import SettingsControls from './SettingsControls';

interface Props {
  working: boolean;
  restingMode: string;
}

function PomodoroHeader({ working, restingMode }: Props): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pOptions, setPOptions } = usePomodoroContext();

  const [options, setOptions] = useState(pOptions);

  const modeLabel = working
    ? 'WORKING'
    : restingMode === 'short-rest'
    ? 'SHORT REST'
    : restingMode === 'long-rest'
    ? 'LONG REST'
    : 'TIME TO FOCUS!';

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setPOptions(options);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    localStorage.setItem('pomodoroOptions', JSON.stringify(pOptions));
  }, [pOptions]);

  return (
    <div>
      <div className="header">
        <FaGear className="settings-icon" onClick={showModal} />
      </div>
      <h2>{modeLabel}</h2>

      <Modal
        title="Pomodoro Settings"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Modify your pomodoro profile settings below:</p>
        <SettingsControls options={options} setOptions={setOptions} />
      </Modal>
    </div>
  );
}

export default PomodoroHeader;
