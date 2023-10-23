import { useCallback, useRef, useState } from 'react';
// import toast from 'react-hot-toast';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

function TodoInsert({ onInsert }) {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleInput = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      setText('');
      e.preventDefault();
    },
    [text]
  );

  // if (text === '') {
  //   toast.error('내용을 입력해주세요.', { icon: '⚠️' });
  //   return;
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleInput}
          className="mb-[102px] h-[62px] w-full rounded-[50px] px-3 py-1"
        />
        <button type="submit">
          <BsFillArrowUpCircleFill size="44" color="#7F7FD5" />
        </button>
      </form>
    </div>
  );
}

export default TodoInsert;
