import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateTodo = () => {
    navigate("/todo");
  };
  return (
    <div className="text-center">
      <h1 className="text-info py-3">Welcome to TODO-list</h1>
      <Button onClick={navigateTodo}>Add TODO</Button>
    </div>
  );
};

export default Home;
