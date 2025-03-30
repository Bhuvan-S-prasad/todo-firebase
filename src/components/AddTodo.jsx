import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AddTodo = ({ onTodoAdded }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = async () => {
    if (todo.trim() === "") return;
    try {
      // Add todo to Firestore
      const docRef = await addDoc(collection(db, "todos"), {
        text: todo,
        completed: false,
        timestamp: serverTimestamp(), // Stores time of creation
      });

      console.log("Todo added with ID:", docRef.id);
      onTodoAdded(); // Refresh list
      setTodo(""); // Clear input field
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  return (
    <div class  = "add-todo">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
