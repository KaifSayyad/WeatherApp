import React, { useState } from 'react';
import Navbar from '../UI/Navbar';
import '../../assets/css/Login.css'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    props.onLogin(true);
  };

  return (
    <>
    <Navbar navigate={props.navigate} isUserLoggedIn={props.isUserLoggedIn} handleLogout={props.handleLogout} />
      <h2>Login</h2>
    <div className='container'>
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