import TodoList from './components/TodoList';
import TodoHead from './components/TodoHead';
import TodoInsert from './components/TodoInsert';
import TodayDate from './components/TodayDate';
import Clock from './components/Clock';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to">
      <div className="flex flex-col items-center justify-center gap-[72px]">
        <TodoHead />
        <main className="flex">
          <div>
            <TodayDate />
            <Clock />
          </div>
          <TodoList />
        </main>
        <TodoInsert />
      </div>
    </div>
  );
}

export default App;
