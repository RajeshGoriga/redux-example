import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login'
import Registration from './Registration'
import Profile from './Profile'
import Users from './users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
