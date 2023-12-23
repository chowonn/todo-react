import { useCallback } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function TodoList({
  todo,
  setTodo,
  onRemoveTodo,
  onToggleChecked,
  onEditTodo,
}) {
  const handleDeleteAll = useCallback(() => {
    if (window.confirm('모두 삭제하시겠습니까?')) {
      setTodo([]);
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
          {todo.map((todos) => (
            <TodoItem
              key={todos.id}
              todos={todos}
              onRemoveTodo={onRemoveTodo}
              onToggleChecked={onToggleChecked}
              onEditTodo={onEditTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      todos: PropTypes.array,
    })
  ),
  setTodo: PropTypes.func,
  handleDeleteAll: PropTypes.func,
  onRemoveTodo: PropTypes.func,
  onToggleChecked: PropTypes.func,
  onEditTodo: PropTypes.func,
};

export default TodoList;
