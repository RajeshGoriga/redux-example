import { connect } from "react-redux";
import { useState } from "react";
import { setTodo, updateTodo } from "./Actions";
export const Profile = (props) => {
  const { user } = props;
  const [input, setInput] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedId, setSelectedID] = useState("");
  const [updatedValue, setUpdatedValue] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onAdd = () => {
    Math.floor(1000 + Math.random() * 9000);
    const todoObj = {
      id: Math.floor(1000 + Math.random() * 9000),
      value: input,
    };
    props.setTodo(todoObj);
    setInput("");
  };
  const onUpdate = (id, value, e) => {
    setUpdatedValue(value);
    setSelectedID(id);
    setIsUpdate(true);
  };

  const onUpdateValue = (e) => {
    setUpdatedValue(e.target.value);
  };

  const onUpdateClicked = () => {
    const todoObj = {
      id: selectedId,
      value: updatedValue,
    };
    props.updateTodo(todoObj);
    setIsUpdate(false)
    
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
      <ul>
        {props.todo &&
          props.todo.map((item) => (
            <li key={item.id}>
              {isUpdate && selectedId === item.id ? (
                <>
                  {" "}
                  <input
                    type="text"
                    id="myInput"
                    placeholder="Title..."
                    onChange={onUpdateValue}
                    value={updatedValue}
                  />
                  <button onClick={onUpdateClicked}>updated</button>
                </>
              ) : (
                <>
                  {item.value}
                  <button onClick={onUpdate.bind(this, item.id, item.value)}>
                    Update
                  </button>
                </>
              )}
            </li>
          ))}
      </ul>
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
    updateTodo: (payload) => dispatch(updateTodo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
