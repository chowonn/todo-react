import { useCallback, useEffect, useRef, useState } from 'react';
// import { toast } from 'react-hot-toast';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

function TodoInsert({ todo }) {
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const handleInputChange = useCallback((e) => {
    setContent(e.target.value); //e.target.value 사용자가 입력한 값으로 setText에 e.target.value 라는 사용자가 입력한 값을 나타내는 것.
    console.log(e.target.value);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content == '') {
      alert('할 일을 입력해주세요.');
    }
    todo.onSubmit(content);
    setContent('');
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={content}
          onChange={handleInputChange}
          className="mb-[102px] h-[62px] w-full
           rounded-[50px] px-3 py-1"
        />
        <button
          className="absolute right-2 top-2"
          type="submit"
          onClick={handleSubmit}
          // onKeyPress={handleKeyPress} keyPress 이벤트가 deprecated 되었음. mdn에서도 keydown 권장함.
          onKeyDown={handleKeyDown}
        >
          <BsFillArrowUpCircleFill size="44" color="#7F7FD5" />
        </button>
      </form>
    </div>
  );
}

TodoInsert.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  handleSubmit: PropTypes.func,
};

export default TodoInsert;
