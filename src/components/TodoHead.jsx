import { useMediaQuery } from 'react-responsive';

function TodoHead() {
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 480px)',
  });

  return (
    !isSmallScreen && (
      <div>
        <h1 className="mt-[100px] text-center text-6xl font-bold text-white">
          췅님 &apos;s Todo List
        </h1>
      </div>
    )
  );
}

export default TodoHead;
