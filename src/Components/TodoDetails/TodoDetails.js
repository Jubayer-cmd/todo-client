import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "./details.css";

const TodoDetails = ({ work, setTodo }) => {
  const { _id, name, description } = work;

  const [clicked, setIsClicked] = useState(false);
  function handleComplete() {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/todo/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Task has been Deleted!");
          const remaining = work.filter((service) => service._id !== id);
          setTodo(remaining);
        });
    }
  };
  return (
    <tbody>
      <tr>
        <td style={{ textDecoration: clicked ? "line-through" : "none" }}>
          {name}
        </td>
        <td style={{ textDecoration: clicked ? "line-through" : "none" }}>
          {description}
        </td>
        <td>
          <Button
            onClick={() => handleComplete(_id)}
            className="btn btn-success"
          >
            Complete
          </Button>
        </td>
        <td>
          <Button onClick={() => handleDelete(work._id)} className="bg-danger">
            Delete
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default TodoDetails;
