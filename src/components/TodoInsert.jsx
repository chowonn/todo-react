import { useCallback, useRef, useState, useEffect } from 'react';
// import { toast } from 'react-hot-toast';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

function TodoInsert({ todoList, setTodoList }) {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleInput = useCallback((e) => {
    setText(e.target.value);
    console.log(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (text === '') {
      // toast.error('닉네임을 입력해주세요.', { icon: '⚠️' });
      alert('내용을 입력해주세요');
      console.log('입력해라');
      return;
    } else {
      const newTodo = todoList.concat({
        id: todoList.length,
        text,
        checked: false,
      });
      setTodoList(newTodo);
      localStorage.setItem('todoList', JSON.stringify(newTodo));
      setText('');
      inputRef.current.focus();
    }
  });

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleInput}
          className="mb-[102px] h-[62px] w-full
           rounded-[50px] px-3 py-1"
        />
        <button className="absolute right-2 top-2" type="submit">
          <BsFillArrowUpCircleFill size="44" color="#7F7FD5" />
        </button>
      </form>
    </div>
  );
}

TodoInsert.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default TodoInsert;
