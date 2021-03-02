//
//

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  titleText,
  setTitleText,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const titleTextHandler = (e) => {
    setTitleText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        titleText: titleText,
        completed: false,
        id: Math.random() * 10,
      },
    ]);
    setInputText("");
    setTitleText("");
  };
  return (
    <form action="POST">
      <label htmlFor="">
        <b>Title</b>
      </label>
      <input value={titleText} onChange={titleTextHandler} type="text" />
      <label htmlFor="">
        <b>Content</b>
      </label>
      <textarea
        onChange={inputTextHandler}
        value={inputText}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={submitTodoHandler} type="submit">
        Add todo
      </button>
    </form>
  );
};

export default Form;
