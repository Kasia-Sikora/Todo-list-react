export const utils = {
  convertTime: (time) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (time.getHours() < 10) {
      hours = `0${time.getHours()}`;
    }
    if (time.getMinutes() < 10) {
      minutes = `0${time.getMinutes()}`;
    }
    return `${hours}:${minutes}`;
  },

  getLocalTodos: (setTodos) => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  },

  saveTodosLocal: (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },

  filterTodos: (status, setFilteredTodos, todos) => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  },
};
