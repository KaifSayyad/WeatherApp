// App.jsx
import React, { useState } from 'react';
import Login from './components/Auth/Login.jsx';
import SignUp from './components/Auth/SignUp.jsx';
import Home from './components/Home.jsx';
import './App.css';

const App = () => {
  const [route, setRoute] = useState('home');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const navigate = (newRoute) => {
    setRoute(newRoute);
  };

  const handleLogin = (isUserLoggedIn) =>{
    setIsUserLoggedIn(isUserLoggedIn);
    console.log(isUserLoggedIn);
  }

  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => navigate('home')}>Home</button></li>
          <li><button onClick={() => navigate('login')}>Login</button></li>
          <li><button onClick={() => navigate('signup')}>Sign Up</button></li>
        </ul>
      </nav>
      {route === 'home' && <Home isUserLoggedIn={isUserLoggedIn}/>}
      {route === 'login' && <Login onLogin={handleLogin} />}
      {route === 'signup' && <SignUp />}
    </div>
  );
};

export default App;
