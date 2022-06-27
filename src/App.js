import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, completed, remove } from "./features/todoReducer";
import "./app.css";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleAddClick = () => {
    if (text !== "") dispatch(add(text));
    setText("");
  };

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleCompleted = (id) => {
    dispatch(completed(id));
  };

  return (
    <div className="main">
      <div className="form">
        <input
          type="text"
          placeholder="введите текст"
          value={text}
          onChange={handleText}
        />
        <button onClick={handleAddClick}>add</button>
      </div>

      <div className="addList">
        {todos.map((item, id) => {
          return (
            <div key={id} className="todo">
              <button
                className={item.done ? "completedNotActive" : "completedActive"}
                onClick={() => handleCompleted(id)}
              >
                ★
              </button>
              {item.text}
              <button onClick={() => handleRemove(id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
