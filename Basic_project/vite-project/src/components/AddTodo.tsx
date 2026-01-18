import { useState, type ChangeEvent, type FormEvent } from "react";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [text, setText] = useState<string>("");

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (text.trim().length === 0) return;
    onAddTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="relative flex items-center gap-2 group"
    >
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="h-12 px-5 bg-white/50 backdrop-blur-sm border-slate-200 rounded-2xl 
                     focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
        />
      </div>
      <Button
        type="submit"
        disabled={!text.trim()}
        className="h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl 
                   shadow-lg shadow-indigo-200 transition-all active:scale-95 disabled:opacity-50"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add
      </Button>
    </form>
  );
};

export default AddTodo;
