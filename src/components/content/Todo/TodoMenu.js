import TextField from "@material-ui/core/TextField";
import React from "react";
import { GoPlus } from "react-icons/go";
import styles from "./TodoMenu.module.css";

const TodoMenu = ({ handleOpenModal, status, setStatus }) => {
  const selectOption = ["All", "Completed", "Uncompleted"];

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className={styles.menuTodo}>
      <button className={styles.addButton} onClick={handleOpenModal}>
        <GoPlus />
        Add Todo
      </button>
      <TextField
        id="standard-select-currency-native"
        select
        label="Filter"
        value={status}
        onChange={statusHandler}
        className={`${styles.textField} ${styles.todoFilter}`}
        SelectProps={{
          native: true,
        }}
      >
        {selectOption.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </TextField>
    </div>
  );
};

export default TodoMenu;
