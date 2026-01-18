import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/todo";

function App() {
  // Load from localStorage on init
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(), // Better than Math.random()
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodoHandler = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-20 px-4">
      <main className="max-w-xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            My Tasks
          </h1>
          <p className="text-slate-500 mt-2">
            {todos.filter((t) => !t.completed).length} items remaining
          </p>
        </header>

        <AddTodo onAddTodo={addTodoHandler} />

        <TodoList
          items={todos}
          onRemoveTodo={removeTodoHandler}
          onToggleTodo={toggleTodoHandler}
        />

        {todos.length > 0 && (
          <button
            onClick={() => setTodos([])}
            className="text-xs text-slate-400 hover:text-red-500 transition-colors block mx-auto uppercase tracking-widest font-semibold"
          >
            Clear All
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
