import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Query the "todos" collection, ordered by timestamp descending
    const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const todosArr = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosArr);
    });

    return () => unsubscribe();
  }, []);

  // Optional: local deletion update if needed (Firestore's onSnapshot handles real-time update)
  const handleDelete = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
