import "./App.css";
import { useState } from "react";
import { connect } from "react-redux";
import { user } from "./Reducers/Registration.reducers";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const navigate = useNavigate();
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onLogin = () => {
    if (props.user) {
      console.log("props.user.user", props.user.email);
    }

    if (!props.user) {
      setError("User Not Found");
    } else {
      console.log("props.user.user", props.user);
      if (props.user && props.user.name) {
        if (userName === props.user.userName && password === props.user.password) {
          navigate("/profile");
        } else {
          setError("user name or password is wrong");
        }
      }
    }
  };
  return (
    <div className="App-header">
      <label>User name</label>
      <input type="text" onChange={onUserNameChange} value={userName}></input>
      <label>Password</label>
      <input type="text" onChange={onPasswordChange} value={password}></input>
      <button onClick={onLogin}>Login</button>
      {error}
      <a href="/registration">Sign up</a>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user && state.user.user,
  };
};

export default connect(mapStateToProps)(Login);
