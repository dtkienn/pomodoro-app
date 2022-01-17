import React from 'react';
import { useTimer } from 'react-timer-hook';
import { useState } from 'react';
import Button from "@atlaskit/button";

export default function Timer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => {
      window.alert('Session finished');
      setIsWork(!isWork);
      const time = new Date();
      time.setSeconds(`${isWork ? 300 : 1200}`);
      restart(time);
    }});

  const [isWork, setIsWork] = useState(true);

  return (
    <div style={{textAlign: 'center', marginBottom: '30px'}}>
    <div>{`${isWork ? "Work session" : "Rest session"}`}</div>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? '' : 'Session paused!'}</p>
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={resume}>Resume</Button>
      <Button onClick={() => {
        const time = new Date();
        time.setSeconds(`${isWork ? 300 : 1200}`);
        restart(time);
        setIsWork(!isWork);
      }}>Change Session!</Button>
      <Button onClick={() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 0);
        restart(time)
      }
      }>End Session</Button>
    </div>
  );
}
