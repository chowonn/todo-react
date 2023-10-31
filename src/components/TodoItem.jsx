import { MdEdit } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { GoCheckCircle } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

function TodoItem({ todoItem, todoList, setTodoList }) {
  const { checked } = todoList;
  const [edit, setEdit] = useState(false);
  const [updateText, setUpdateText] = useState('');

  const handelDeleteTodo = useCallback(() => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  });

  const onClickEditButton = useCallback(() => {
    setEdit(true);
  });

  const onClickSubmitButton = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      text: item.id === todoItem.id ? updateText : item.text,
    }));
    setTodoList(nextTodoList);

    setEdit(false);
  };

  // 연필모양의 수정버튼을 클릭하면 수정 중임을 나타내기 위해 체크 표시가 나타나고
  // 수정 중이었던 체크표시를 클릭하면 수정이 다시 원래대로
  return (
    <>
      <li className=" flex items-center justify-between ">
        <div className="flex gap-[10px]">
          {checked ? (
            <GoCheckCircle size="28" className="mr-[10px] inline-block" />
          ) : (
            <GoCheckCircleFill size="28" className="mr-[10px] inline-block" />
          )}
          {edit ? (
            <div>
              <input
                value={updateText}
                onChange={(e) => setUpdateText(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p>{todoItem.text}</p>
            </div>
          )}
        </div>
        <div className="flex gap-[10px]">
          {edit ? (
            <button type="button" onClick={onClickSubmitButton}>
              <AiOutlineCheck size="28" />
            </button>
          ) : (
            <>
              <button type="button" onClick={onClickEditButton}>
                <MdEdit size="28" />
              </button>
              <button type="button" onClick={handelDeleteTodo}>
                <IoClose size="28" />
              </button>
            </>
          )}
        </div>
      </li>
    </>
  );
}

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
  handelDeleteTodo: PropTypes.func,
};

export default TodoItem;
