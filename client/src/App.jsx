// App.jsx
import React, { useState } from "react";
import Login from "./components/Auth/Login.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import Home from "./components/home/Home.jsx";
import Home_loggedIn from "./components/home/Home_loggedIn.jsx";
import "./App.css";

const App = () => {
  const [route, setRoute] = useState("home");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const navigate = (newRoute) => {
    setRoute(newRoute);
  };

  const handleLogin = (isUserLoggedIn) => {
    setIsUserLoggedIn(isUserLoggedIn);
    navigate("home");
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    navigate("home");
  };

  return (
    <div>
      {route === "home" && isUserLoggedIn == false && (
        <Home
          isUserLoggedIn={isUserLoggedIn}
          navigate={navigate}
          handleLogout={handleLogout}
        />
      )}
      {route === "home" && isUserLoggedIn == true && (
        <Home_loggedIn
          isUserLoggedIn={isUserLoggedIn}
          navigate={navigate}
          handleLogout={handleLogout}
        />
      )}
      {route === "login" && <Login onLogin={handleLogin} />}
      {route === "signup" && <SignUp />}
    </div>
  );
};

export default App;
