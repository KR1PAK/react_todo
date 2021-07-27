import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { useState } from "react";
import { STATUSES } from "../../constants";
import DialogDelete from "../DialogDelete/DialogDelete";

const TodoItem = ({ todo, todos, setTodos }) => {
  const [isEditorActive, setIsEditorActive] = useState(false);
  const [editingText, setEditingText] = useState("");
  function helper(id, key, value) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, [key]: value };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const editTodo = (id, text) => {
    setEditingText(text);
    setIsEditorActive((prevState) => !prevState);

    if (isEditorActive) {
      helper(id, "text", editingText);
    }
  };

  function statusHandler(id) {
    helper(id, "status", todo.status !== "done" ? "done" : "new");
  }
  function changeStatus(e, id) {
    helper(id, "status", e.target.value);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function changeTodoText(e) {
    setEditingText(e.target.value);
  }

  function saveTodoByClickEnter(e, id, text) {
    if (e.key === "Enter") {
      editTodo(id, text);
    }
  }

  const [isDialogDeleteOpened, setIsDialogDeleteOpened] = useState(false);

  return (
    <>
      <div className="todos__item" key={todo.id}>
        <Checkbox color="default" checked={todo.status === "done"} onChange={() => statusHandler(todo.id)} />
        {isEditorActive ? (
          <TextField
            autoFocus
            onKeyUp={(e) => saveTodoByClickEnter(e, todo.id, todo.text)}
            onChange={changeTodoText}
            value={editingText}
          />
        ) : (
          <p className="todos__text">{todo.text}</p>
        )}
        <div className="todos__actions">
          <FormControl className="todos__select">
            <InputLabel>Status</InputLabel>
            <Select
              value={todo.status}
              onChange={function (e) {
                return changeStatus(e, todo.id);
              }}
            >
              {STATUSES.map((status) => (
                <MenuItem value={status} key={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            startIcon={<Edit />}
            variant="contained"
            color="primary"
            size="small"
            onClick={() => editTodo(todo.id, todo.text)}
          >
            Edit
          </Button>
          <Button
            className="todos__delete"
            startIcon={<Delete />}
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => setIsDialogDeleteOpened(true)}
          >
            Delete
          </Button>
        </div>
      </div>
      <DialogDelete
        isDialogDeleteOpened={isDialogDeleteOpened}
        setIsDialogDeleteOpened={setIsDialogDeleteOpened}
        deleteFunction={() => deleteTodo(todo.id)}
      />
    </>
  );
};

export default TodoItem;
