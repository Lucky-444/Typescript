import { Button } from "./components/ui/button"

const App = () => {
  return ( // ✅ You need to return the JSX
    <main className="max-w-6xl mx-auto my-10 px-5 md:px-0">
      <Button>
        Add Me
      </Button>
      {/* <AddTodo onAddTodo={addTodoHandler} /> */}
      {/* <TodoList items={todos} onRemoveTodo={removeTodoHandler}/> */}
    </main>
  )
}

export default App
