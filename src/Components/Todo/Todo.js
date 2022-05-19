import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-toastify";
import TodoDetails from "../TodoDetails/TodoDetails";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("https://cryptic-waters-76666.herokuapp.com/todo")
      .then((response) => setTodo(response.data));
  }, [todo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const description = event.target.description.value;
    const todos = {
      name,
      description,
    };
    axios
      .post("https://cryptic-waters-76666.herokuapp.com/todo", todos)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Task has been added");
          event.target.reset();
        }
      });
  };
  return (
    <div className="text-center py-5">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="Task Name" required />
        <input
          type="text"
          name="description"
          id=""
          placeholder="Add Description"
          required
        />
        <input type="submit" value="ADD TASK" />
      </form>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        {todo.map((work) => (
          <TodoDetails
            key={work._id}
            work={work}
            setTodo={setTodo}
          ></TodoDetails>
        ))}
      </Table>
    </div>
  );
};

export default Todo;
