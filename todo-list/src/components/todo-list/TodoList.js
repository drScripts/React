import "./TodoList.css";

const TodoList = (props) => {
  let data = [];

  if (props.data.length === 0) {
    data.push({
      id: 2,
      title: "No Data Here",
    });
  } else {
    data = props.data;
  }

  return (
    <ul>
      {data.map((el) => {
        return <li key={el.id}>{el.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
