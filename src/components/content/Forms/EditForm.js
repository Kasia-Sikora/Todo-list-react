import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const EditForm = ({ setInput, setEdit, setTodos, input, todos, todo }) => {
  const [inputValidate, setInputValidate] = useState("primary");

  const onInputChange = (e) => {
    setInput(e.target.value);
    setInputValidate("primary");
  };

  const submitInput = (e) => {
    if (/^\s*$/.test(input)) {
      setInputValidate("secondary");
      e.preventDefault();
    } else {
      setInputValidate("primary");
      setTodos(
        todos.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              text: input,
            };
          }
          return item;
        })
      );
      setInput(input);
      setEdit(false);
    }
  };

  function isEsc(event) {
    return event.keyCode === 27
  }

  const close = (e) => {
    if (isEsc(e)) {
      setInput(todo.text);
      setEdit(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitInput}>
        <TextField
          autoFocus={true}
          type="text"
          value={input}
          onChange={onInputChange}
          onKeyDown={close}
          color={inputValidate}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
};

export default EditForm;
