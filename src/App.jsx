import TodoList from './components/TodoList';
import TodoHead from './components/TodoHead';
import TodoInsert from './components/TodoInsert';
import TodayDate from './components/TodayDate';
import Clock from './components/Clock';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to">
      <div className="m-auto flex w-[914px] flex-col justify-center gap-[72px]">
        <TodoHead />
        <main className="flex justify-center">
          <div>
            <TodayDate />
            <Clock />
          </div>
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </main>

        <TodoInsert todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default App;
