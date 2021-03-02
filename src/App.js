import { useState } from "react";
import "./styles/style.scss";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Title from "./components/Title";
import Todos from "./components/Todos";

const App = () => {
  const [titleText, setTitleText] = useState("");
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Navbar />
      <div className="App">
        <h1>My todo list</h1>
      </div>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        titleText={titleText}
        setTitleText={setTitleText}
      />
      <Title title="My todos" />
      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
