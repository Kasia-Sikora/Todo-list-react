import Modal from "@material-ui/core/Modal";
import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";
import Form from "./Forms/Form";
import TodoList from "./Todo/TodoList";
import TodoMenu from "./Todo/TodoMenu";
import { utils } from "./Utils";

const Content = () => {
  const [inputText, setInputText] = useState("");
  const [endTime, setEndTime] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    utils.getLocalTodos(setTodos);
  }, []);

  useEffect(() => {
    utils.filterTodos(status, setFilteredTodos, todos);
    utils.saveTodosLocal(todos);
  }, [todos, status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      setError("Input cannot be empty");
      return;
    }
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        text: inputText,
        startTime: utils.convertTime(startTime),
        endTime: utils.convertTime(endTime),
        completed: false,
        time: startTime,
      },
    ]);
    setInputText("");
    setEndTime(new Date());
    setStartTime(new Date());
    setOpenModal(false);
    setError("");
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.content}>
      <TodoMenu
        handleOpenModal={handleOpenModal}
        status={status}
        setStatus={setStatus}
      />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        className={styles.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disablePortal={true}
        disableAutoFocus={true}
      >
        <Form
          inputText={inputText}
          endTime={endTime}
          startTime={startTime}
          handleSubmit={handleSubmit}
          setInputText={setInputText}
          setEndTime={setEndTime}
          setStartTime={setStartTime}
          setError={setError}
          error={error}
          handleCloseModal={handleCloseModal}
          onKeyDown={handleSubmit}
        />
      </Modal>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default Content;
