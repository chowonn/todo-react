import TodoItem from './TodoItem';

function TodoList() {
  return (
    <>
      <h3 className="sr-only">Todo List</h3>
      <div className="relative ml-11 h-[600px] w-[500px] rounded-[28px] bg-white px-9 py-[27px] opacity-80">
        <button
          type="button"
          className="text-red absolute right-[25px] top-[25px] text-sm"
        >
          전체삭제
        </button>
        <ul className="mt-[45px] flex flex-col gap-8">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </div>
    </>
  );
}

export default TodoList;
