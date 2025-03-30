import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {

  const [, setRefreshTrigger] = useState(0);

  // Function to refresh the list after adding a todo
  const refreshList = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <AddTodo onTodoAdded={refreshList} />
      <TodoList />
    </div>
  );
}
export default App;
