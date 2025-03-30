import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function TodoItem({ todo, onDelete }) {
  // Function to delete the todo from Firestore
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "todos", todo.id));
      onDelete(todo.id); // Optional local update
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // Function to toggle the completed status of the todo
  const handleToggleComplete = async () => {
    try {
      const todoRef = doc(db, "todos", todo.id);
      // Update the 'completed' field to the opposite of its current value
      await updateDoc(todoRef, { completed: !todo.completed });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
      />
      {todo.text}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
