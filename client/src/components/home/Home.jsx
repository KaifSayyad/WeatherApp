import React from 'react';
import '../../assets/css/Home.css';
import Navbar from '../UI/Navbar';

const Home = (props) => {
  return (
    <div>
      <Navbar isUserLoggedIn={props.isUserLoggedIn} navigate={props.navigate} handleLogout={props.handleLogout}/>
      <div className='aboutUs'>
        <h1>Welcome to My Weather App!</h1>
        <p>
          This website provides current weather information and weather forecasting for cities around the world.
          Use the navigation above to explore the different features of the app.
        </p>
      </div>
    </div>
  );
}

export default Home;
