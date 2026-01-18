import { Trash2, CheckCircle2, Circle } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import type { Todo } from "../types/todo";

type TodoListProps = {
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
  onToggleTodo: (todoId: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  items,
  onRemoveTodo,
  onToggleTodo,
}) => {
  return (
    <div className="my-8 space-y-3">
      <AnimatePresence mode="popLayout">
        {items.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-400 py-10 italic"
          >
            Your list is empty. Start by adding something!
          </motion.p>
        ) : (
          items.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
              layout
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all 
                ${
                  todo.completed
                    ? "bg-slate-50 border-slate-200 opacity-75"
                    : "bg-white border-white shadow-sm hover:shadow-md"
                }`}
            >
              <div
                className="flex items-center gap-3 flex-1 cursor-pointer"
                onClick={() => onToggleTodo(todo.id)}
              >
                <button className="text-indigo-500 transition-transform active:scale-125">
                  {todo.completed ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <Circle className="w-6 h-6 text-slate-300" />
                  )}
                </button>
                <span
                  className={`text-slate-700 font-medium transition-all ${todo.completed ? "line-through text-slate-400" : ""}`}
                >
                  {todo.text}
                </span>
              </div>

              <Button
                onClick={() => onRemoveTodo(todo.id)}
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
