import React from "react";
import Button from "react-bootstrap/Button";

const Second = ({ todo, onDelete, onEdit }) => {
  return (
    <div className="second-class">
      {/* Render your todo array here */}
      {todo.map((item, index) => (
        <div key={index} className="todo-item">
          <h5>{item}</h5>
         
          <Button
            variant="outline-danger"
            onClick={() => onDelete(index)}
            className="delete-button"
          >
            Delete
          </Button>
          <Button
            variant="outline-success"
            onClick={() => onEdit(index)}
            className="edit-button"
          >
            Edit
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Second;
