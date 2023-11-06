import { useCallback } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
// import { useCallback } from 'react';

function TodoList({ todoList, setTodoList }) {
  const handleDeleteAll = useCallback(() => {
    if (window.confirm('모두 삭제하시겠습니까?')) {
      setTodoList([]);
      localStorage.clear();
    }
  });
  return (
    <>
      <h3 className="sr-only">Todo List</h3>
      <div className="relative ml-11 h-[600px] w-[500px] rounded-[28px] bg-white px-9 py-[27px] opacity-80">
        <button
          type="button"
          className="absolute right-[25px] top-[25px] text-sm text-red"
          onClick={handleDeleteAll}
        >
          전체삭제
        </button>
        <ul className="mt-[45px] flex flex-col gap-8">
          {todoList?.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired,
  handleDeleteAll: PropTypes.func,
};

export default TodoList;
