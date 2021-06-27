import React, { useState } from "react";
import { FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";
import EditForm from "./../Forms/EditForm";
import styles from "./Todo.module.css";

const Todo = ({ todos, todo, setTodos }) => {
  const { text, startTime, endTime, completed } = todo;
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(text);

  const removeTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const editTodo = () => {
    setEdit(!edit);
  };

  const completeTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`${styles.todo} ${completed ? styles.completed : ""}`}>
      <div className={styles.todoDuration}>{`${startTime}-${endTime}`}</div>
      <div className={styles.todoText}>
        {edit ? (
          <EditForm
            setTodos={setTodos}
            setEdit={setEdit}
            setInput={setInput}
            input={input}
            todos={todos}
            todo={todo}
          />
        ) : (
          input
        )}
      </div>
      <div className={styles.buttons}>
        <button onClick={completeTodo} className={styles.btnCheck}>
          <FaCheck />
        </button>
        <button onClick={editTodo} className={styles.btnTrash}>
          <FaEdit />
        </button>
        <button onClick={removeTodo} className={styles.btnTrash}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Todo;
