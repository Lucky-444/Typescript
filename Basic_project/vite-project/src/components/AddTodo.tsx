import { Button } from "./ui/button"
import { Input } from "./ui/input"

const AddTodo = () => {
  return <form>
         <Input type="text" placeholder="Write a Todo"></Input>
         <Button>Add todo</Button>
  </form>
}

export default AddTodo