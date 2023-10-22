function TodayDate() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
  console.log(dateString);
  return (
    <div>
      <p className="text-[28px] font-semibold text-white">{dateString}</p>
    </div>
  );
}

export default TodayDate;
