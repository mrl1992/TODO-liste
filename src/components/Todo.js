const Todo = ({ text, titleText, todo, todos, setTodos }) => {
  const deleteBtn = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <article className="card">
      <h2>{titleText}</h2>
      <p>{text}</p>
      <button onClick={deleteBtn} className="complete-btn">
        Completed
      </button>
    </article>
  );
};

export default Todo;
