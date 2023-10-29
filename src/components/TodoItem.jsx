import { MdEdit } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { GoCheckCircle } from 'react-icons/go';
import { GoCheckCircleFill } from 'react-icons/go';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

function TodoItem({ todoItem, todoList, setTodoList }) {
  const { checked } = todoList;

  const handelDeleteTodo = useCallback(() => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  });

  return (
    <>
      <li className=" flex items-center justify-between ">
        <div className="flex gap-[10px]">
          {checked ? (
            <GoCheckCircle size="28" className="mr-[10px] inline-block" />
          ) : (
            <GoCheckCircleFill size="28" className="mr-[10px] inline-block" />
          )}
          <p>{todoItem.text}</p>
        </div>
        <div className="flex gap-[10px]">
          <button className="">
            <MdEdit size="28" />
          </button>
          <button type="button" onClick={handelDeleteTodo}>
            <IoClose size="28" />
          </button>
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
