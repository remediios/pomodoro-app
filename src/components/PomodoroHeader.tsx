import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { FaGear } from 'react-icons/fa6';
import { usePomodoroContext } from '../contexts/PomodoroContext';

interface Props {
  working: boolean;
  restingMode: string;
}

function PomodoroHeader({ working, restingMode }: Props): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pOptions, setPOptions } = usePomodoroContext();

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
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        <div className="settings-controls">
          <div className="settings-control">
            <p>Default Time:</p>
            <Input
              className="settings-control-unit"
              placeholder="Default Time"
              value={pOptions.pomodoroTime}
            />
          </div>
          <div className="settings-control">
            <p>Short Rest Time:</p>
            <Input
              className="settings-control-unit"
              placeholder="Short Rest Time"
              value={pOptions.shortRestTime}
            />
          </div>
          <div className="settings-control">
            <p>Long Rest Time:</p>
            <Input
              className="settings-control-unit"
              placeholder="Long Rest Time"
              value={pOptions.longRestTime}
            />
          </div>
          <div className="settings-control">
            <p>Cycles:</p>
            <Input
              className="settings-control-unit"
              placeholder="Cycles"
              value={pOptions.cycles}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PomodoroHeader;
