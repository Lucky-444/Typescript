import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [text, setText] = useState<string>("");

  const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (text.trim().length === 0) return;

    onAddTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex items-center justify-center gap-4 md:gap-5"
    >
      <Input
        type="text"
        placeholder="Write a Todo..."
        value={text}
        onChange={changeEventHandler}
        className="w-64 md:w-80 rounded-lg border border-gray-300 
                   shadow-sm focus:ring-2 focus:ring-blue-400 
                   focus:border-blue-400 transition-all duration-200"
      />
      <Button
        type="submit"
        className="bg-blue-600 text-white rounded-lg px-4 py-2 
                   hover:bg-blue-700 hover:scale-105 active:scale-95 
                   shadow-md transition-all duration-200"
      >
        Add Todo
      </Button>
    </form>
  );
};

export default AddTodo;
