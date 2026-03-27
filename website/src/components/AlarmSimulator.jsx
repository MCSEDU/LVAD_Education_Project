import React, { useState } from 'react';

const AlarmSimulator = () => {
  const [alarm, setAlarm] = useState(null);

  const triggerAlarm = (type) => {
    setAlarm(type);
    // Simulate alarm sound or visual
  };

  return (
    <div className="alarm-simulator">
      <h3>LVAD Alarm Simulator</h3>
      <button onClick={() => triggerAlarm('lowBattery')}>Low Battery</button>
      <button onClick={() => triggerAlarm('suction')}>Suction Event</button>
      {alarm && <p>Alarm: {alarm}</p>}
    </div>
  );
};

export default AlarmSimulator;