import { useEffect, useState } from 'react';
import { string } from 'prop-types';

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
    <div className="mobile:block flex hidden flex-col items-start gap-11">
      <p className="mt-3 text-[300px] font-extrabold leading-[15rem] text-white">
        {hours}
      </p>
      <p className="text-[300px] font-extrabold leading-[15rem] text-white">
        {minutes}
      </p>
    </div>
  );
}

Clock.propTypes = {
  hours: string,
  minutes: string,
};

export default Clock;
