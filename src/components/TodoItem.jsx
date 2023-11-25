import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { GoCheckCircle } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

// 작성된 투두 상태 를 map 으로 li에 todos이라는 새 배열을 반환함. => 이게 작성되는 투두 내용
// 작성된 투두 목록에서 관리해야할 기능은? => 수정, 삭제, 보여주기 , 체크박스
// create (만들고 즉, 추가), read (추가한거 읽어오고), update(읽어온거 수정), delete (읽어온거 삭제)
// update 는 읽어온거를 수정해야하니까 읽어온 배열에서 수정한 새 배열을 반환해야함
// delete는 읽어온 배열에서 id 값이 일치하지 않는 것을 골라내면 됨

function TodoItem({ todos, onRemoveTodo, onToggleChecked }) {
  const { id, text, checked } = todos;
  const [edit, setEdit] = useState(false);
  const [updateText, setUpdateText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onClickEditButton = useCallback(() => {
    setEdit(true);
  });

  // const onClickSubmitButton = () => {
  //   const nextTodoList = todo.map((item) => ({
  //     ...item,
  //     text: item.id === todoItem.id ? updateText : item.text,
  //   }));
  //   setTodo(nextTodoList);
  //   setEdit(false);
  //   localStorage.setItem('todo', JSON.stringify(nextTodoList));
  // };

  return (
    <>
      <li className=" flex items-center justify-between ">
        <form onSubmit={handleSubmit}>
          <div type="button" className="flex gap-[10px]">
            <button type="button" onClick={() => onToggleChecked(id)}>
              {checked ? (
                <GoCheckCircleFill
                  size="28"
                  className="mr-[10px] inline-block"
                />
              ) : (
                <GoCheckCircle size="28" className="mr-[10px] inline-block" />
              )}
            </button>

            {edit ? (
              <div>
                <input
                  value={updateText}
                  onChange={(e) => setUpdateText(e.target.value)}
                />
              </div>
            ) : (
              <div>
                {checked ? (
                  <p className="line-through">{text}</p>
                ) : (
                  <p>{text}</p>
                )}
                {/* <p>{text}</p> */}
              </div>
            )}
          </div>
        </form>
        <div className="flex gap-[10px]">
          {edit ? (
            <>
              <button type="button" onClick={onClickEditButton}>
                <FaCheck size="24" color="#228B22" />
              </button>
              <button type="button" onClick={() => onRemoveTodo(id)}>
                <IoClose size="28" color="#ff0000" />
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={onClickEditButton}>
                <MdEdit size="28" />
              </button>
              <button type="button" onClick={() => onRemoveTodo(id)}>
                <MdDeleteForever size="28" />
              </button>
            </>
          )}
        </div>
      </li>
    </>
  );
}

TodoItem.propTypes = {
  todos: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }),

  setTodo: PropTypes.func,
  handelDeleteTodo: PropTypes.func,
  onRemoveTodo: PropTypes.func,
  onToggleChecked: PropTypes.func,
};

export default TodoItem;
