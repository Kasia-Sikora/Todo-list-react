import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import React from "react";
import styles from "./Form.module.css";

const Form = ({
  inputText,
  handleSubmit,
  endTime,
  startTime,
  setInputText,
  setEndTime,
  setStartTime,
  error,
  setError,
  handleCloseModal,
}) => {
  const onInputChange = (e) => {
    if (e.target.value !== '') {
      setError('')
    }
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={ styles.form}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            ampm={false}
            variant="inline"
            label="Starting time"
            value={startTime}
            className={styles.timeField}
            onChange={(date) => setStartTime(date)}
            autoFocus={true}
          />
          <KeyboardTimePicker
            ampm={false}
            variant="inline"
            label="Ending time"
            value={endTime}
            className={styles.timeField}
            onChange={(date) => setEndTime(date)}
          />
        </MuiPickersUtilsProvider>
        <TextField
          label="Text"
          type="text"
          value={inputText}
          className={`${styles.textField} ${styles.todoMessage}`}
          onChange={onInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {error ? <div className={styles.errorMessage}>{error}</div> : ""}
        <button className={styles.cancelButton} onClick={handleCloseModal}>
          Cancel
        </button>
        <button type="submit" className={styles.addButton} >
          Save Todo
        </button>
      </form>
    </div>
  );
};

export default Form;
