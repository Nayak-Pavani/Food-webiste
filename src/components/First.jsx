import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Second from "./second";

const FirstCompo = () => {
  const [todoValue, setTodoValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [todoList, setTodoList] = useState([]);

  const handleAddButtonClick = () => {
    if (editingIndex !== null) {
      // If editing, update the todo at the editingIndex
      const newTodoList = [...todoList];
      newTodoList[editingIndex] = todoValue;
      setTodoList(newTodoList);
      setEditingIndex(null);
    } else {
      // If not editing, add a new todo
      setTodoList([...todoList, todoValue]);
    }

    // Clear the input field
    setTodoValue("");
  };

  const handleEditClick = (index) => {
    // Set editing state and populate input field with the todo to edit
    setEditingIndex(index);
    setTodoValue(todoList[index]);
  };

  const handleDelete = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);

    // Reset editing state if deleting the currently edited todo
    if (index === editingIndex) {
      setEditingIndex(null);
      setTodoValue("");
    }
  };

  return (
    <div className="hello">
      <Form>
        <Form.Group className="  " controlId="exampleForm.ControlInput1">
          <Form.Label>TO DO APPLICATION</Form.Label>
          <Form.Control
            type="text"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
        </Form.Group>
      </Form>
      <div className="btn-class">
        <Button
          disabled={todoValue === ""}
          variant="primary"
          onClick={handleAddButtonClick}
        >
          {editingIndex !== null ? "Update" : "Add"}
        </Button>{" "}
      </div>
      <Second
        todo={todoList}
        onDelete={handleDelete}
        onEdit={handleEditClick}
      />
    </div>
  );
};

export default FirstCompo;
