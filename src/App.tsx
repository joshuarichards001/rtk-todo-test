import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { useState } from "react";
import { addTodo, deleteTodo, toggleTodo } from "./redux/todoActions";

function App() {
  const [todoText, setTodoText] = useState("");
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              addTodo({
                id: Math.floor(Math.random() * 1000),
                completed: false,
                todo: todoText,
              })
            )
          }
        >
          Add Todo
        </button>
      </div>

      <div>
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <p>{todo.todo}</p>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
