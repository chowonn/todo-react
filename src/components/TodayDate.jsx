function TodayDate() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
  return (
    <>
      <p className="text-left text-[28px] font-semibold text-white">
        {dateString}
      </p>
    </>
  );
}

export default TodayDate;
