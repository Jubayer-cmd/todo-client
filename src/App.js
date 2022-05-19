import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Signin from "./Components/SignIn/Signin";
import Sigup from "./Components/SignUp/Sigup";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/todo"
          element={
            <RequireAuth>
              <Todo></Todo>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Signin></Signin>}></Route>
        <Route path="/register" element={<Sigup></Sigup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
