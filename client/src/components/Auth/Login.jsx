import React, { useState } from 'react';
import Navbar from '../UI/Navbar';
import '../../assets/css/Login.css';
import ServerUrl from '../../../constants';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginUser = async () => {
      let response;
      response = await fetch(`${ServerUrl}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        console.log(data.message)
        alert(data.message);
        window.location.reload();
      }
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        login(data.token, data.result);
        navigate("/");
      }
    }
    loginUser();
    // props.onLogin(true);
  }

  const login = (token, result) =>{
    props.onLogin(true);
  }

  return (
    <>
    <Navbar navigate={props.navigate} isUserLoggedIn={props.isUserLoggedIn} handleLogout={props.handleLogout} />
      <h2>Login</h2>
    <div className='container1'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label> <span></span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label> <span></span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;