import "./Form.css";
import { useState } from "react";

const Form = (props) => {
  const [getInputVal, setInputVal] = useState("");

  const handleRefreshSubmit = (e) => {
    e.preventDefault();

    if (getInputVal !== "") {
      const newData = {
        id: Math.floor(Math.random() * 100) + 1,
        title: getInputVal,
      };
      setInputVal("");
      props.onAdd(newData);
    }
  };

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        onChange={handleInput}
        id="input"
        placeholder="Add Todo Data"
        value={getInputVal}
      />
      <button type="submit" onClick={handleRefreshSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default Form;
