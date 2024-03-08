import React, { useState } from 'react';
import Navbar from '../UI/Navbar';
import ServerUrl from '../../../constants';
import '../../assets/css/SignUp.css';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../../../server/Controllers/userController';

const SignUp = (props) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const registerUser = async () => {
      let response;
      response = await fetch(`${ServerUrl}/api/user/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          email: email,
          password: password,
        })
      });
      if (!response.ok) {
        const data = await response.json();
        const message = data.message || "Something went wrong, please try again later"
        alert(message);
        window.location.reload();
      }
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        props.onLogin(true);
        navigate("/");
      }
    };
    registerUser();
    loginUser();
  };

  return (
    <>
      <Navbar navigate={props.navigate} isUserLoggedIn={props.isUserLoggedIn} handleLogout={props.handleLogout} />
        <h1>Sign Up Page</h1>
      <div className="container">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>User Name</label> <span>  </span>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label> <span>  </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label> <span>  </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label> <span>  </span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
