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

  const nextId = useRef(4);

  const handleSubmit = (text) => {
    const newTodo = todo.concat({
      id: nextId.current,
      text,
      checked: false,
    });
    setTodo(newTodo);
    nextId.current += 1;
    console.log(newTodo);
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
      })
    );
  };

  const onEditTodo = (id, newText) => {
    //어떤 글을 수정할지 모르니까 수정할 글의 id를 받고, 어떻게 내용을 변경시킬건지 매개변수로 받음.
    //어떻게 수정할까? setTodo 내용을 바꿔주면 된다!
    setTodo(
      todo.map((todos) =>
        todos.id === id ? { ...todos, text: newText } : todos
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to">
      <div className="m-auto flex w-full max-w-screen-md flex-col justify-center gap-[72px] md:w-[768px]">
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
            onEditTodo={onEditTodo}
          />
        </main>

        <TodoInsert onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
