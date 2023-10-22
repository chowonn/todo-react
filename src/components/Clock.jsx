import { useEffect, useState } from 'react';

function Clock() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const clock = setInterval(() => {
      let time = new Date();
      setHours(time.getHours());
      setMinutes(time.getMinutes());
    }, 1000);
    console.log('mount');

    return () => {
      clearInterval(clock);
      console.log('clear!');
    };
  });

  return (
    <div>
      <span>{hours}</span>
      <span>{minutes}</span>
    </div>
  );
}

export default Clock;
