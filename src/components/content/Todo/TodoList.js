import React, { Fragment } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  
  const compareTimes = (todo1, todo2) => {
    return new Date(todo1.time).getTime() - new Date(todo2.time).getTime();
  };

  return (
    <Fragment>
      {filteredTodos.sort(compareTimes).map((todo) => {
        return (
          <Todo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />
        );
      })}
    </Fragment>
  );
};

export default TodoList;
