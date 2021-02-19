import "./styles/style.scss";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Button from "./components/Button";
import Title from "./components/Title";

const App = () => {
  return (
    <>
      <Navbar />
      <Form />
      <Button name="Add" />
      <Title title="My Todos" />
    </>
  );
};

export default App;
