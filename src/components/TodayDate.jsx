import { useMediaQuery } from 'react-responsive';

function TodayDate() {
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 480px)',
  });
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <>
      {!isSmallScreen ? (
        <p className="text-left text-[28px] font-semibold text-white">
          {dateString}
        </p>
      ) : (
        <p className="ml-[25px] mt-[33px]  text-[18px] font-medium text-white ">
          {dateString}
        </p>
      )}
      {/* <p className="text-left text-[28px] font-semibold text-white">
        {dateString}
      </p> */}

      {/* <p className="ml-[25px] mt-[33px]">{dateString}</p> */}
    </>
  );
}

export default TodayDate;
