import React, { useState } from 'react';
import Navbar from '../UI/Navbar';

const SignUp = (props) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      // Reset password and confirmPassword values
      alert('Passwords do not match');
      setPassword('');
      setConfirmPassword('');
      return;
    }

    // Send the form data to the backend
    const formData = {
      userName,
      email,
      password,
      confirmPassword,
    };
    
    console.log('Form Data:', formData);

    props.onLogin(true);
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
