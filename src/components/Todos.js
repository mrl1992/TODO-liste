import Todo from "./Todo";

const Todos = ({ todos, setTodos }) => {
  return (
    <>
      <section className="cardSection">
        {todos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            key={todo.id}
            text={todo.text}
            titleText={todo.titleText}
          />
        ))}
      </section>
    </>
  );
};

export default Todos;
