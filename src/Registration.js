import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRegistrationData } from "./Actions";
const Registration = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    if (userName && password && name) {
      const userDetails = {
        name,
        email,
        userName,
        password,
      };
      props.setRegistrationData(userDetails);
      navigate("/");
    }
  };
  console.log(props.users)
  return (
    <div className="App-header">
      <label>Name</label>
      <input type="text" value={name} onChange={onNameChange} />
      <label>Email</label>
      <input type="email" value={email} onChange={onEmailChange} />
      <label>User name</label>
      <input type="text" value={userName} onChange={onUserNameChange} />
      <label>Password</label>
      <input type="password" value={password} onChange={onPasswordChange} />
      <button onClick={onSubmit}>Register</button>
      <a href="/login">login</a>
      <a href="/users">users</a>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRegistrationData: (payload) => dispatch(setRegistrationData(payload)),
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Registration);
