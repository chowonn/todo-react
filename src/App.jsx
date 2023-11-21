import TodoList from './components/TodoList';
import TodoHead from './components/TodoHead';
import TodoInsert from './components/TodoInsert';
import TodayDate from './components/TodayDate';
import Clock from './components/Clock';
import { useState, useRef } from 'react';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: '리액트 공부하기',
      checked: false,
    },
    {
      id: 2,
      text: '두부 산책가기',
      checked: false,
    },
    {
      id: 3,
      text: '코딩테스트 문제풀기',
      checked: true,
    },
  ]);

  const nextId = useRef(0);

  const handleSubmit = (text) => {
    const newTodo = todo.concat({
      id: nextId.current,
      text,
      checked: false,
    });
    setTodo(newTodo);
    nextId.current += 1;
  };

  const onRemoveTodo = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setTodo(todo.filter((todos) => todos.id !== id));
    }
  };

  const onToggleChecked = (id) => {
    setTodo(
      todo.map((todos) => {
        return todos.id === id ? { ...todos, checked: !todos.checked } : todos;
        // return todos.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to">
      <div className="m-auto flex w-[914px] flex-col justify-center gap-[72px]">
        <TodoHead />
        <main className="flex justify-center">
          <div>
            <TodayDate />
            <Clock />
          </div>
          <TodoList
            todo={todo}
            setTodo={setTodo}
            onRemoveTodo={onRemoveTodo}
            onToggleChecked={onToggleChecked}
          />
        </main>

        <TodoInsert todo={todo} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
