import { connect } from "react-redux";
import { useState } from "react";
import { setTodo } from "./Actions";
export const Profile = (props) => {
  const { user } = props;
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onAdd = () => {
    props.setTodo(input);
    setInput("");
  };

  return (
    <div>
      <h1>Welcome {user && user.name}</h1>
      <input
        type="text"
        id="myInput"
        placeholder="Title..."
        onChange={onInputChange}
        value={input}
      />
      <button onClick={onAdd}>Add</button>
      <ul>{props.todo && props.todo.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user && state.user.user,
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTodo: (payload) => dispatch(setTodo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
