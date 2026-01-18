import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

type TodoListProps = {
  items: { id: string; text: string }[];
  onRemoveTodo: (todoId: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, onRemoveTodo }) => {
  return (
    <div className="my-5 space-y-4">
      {items.map((todo) => (
        <Card
          key={todo.id}
          className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 border border-blue-300 
                     hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
        >
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-blue-900">
              {todo.text}
            </CardTitle>

            <Button
              onClick={() => onRemoveTodo(todo.id)}
              size="icon"
              className="bg-red-600 text-white hover:bg-red-700 
                         focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                         rounded-full p-2 transition-transform duration-200 
                         hover:scale-110 shadow-md cursor-pointer"
              aria-label="Delete todo"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
