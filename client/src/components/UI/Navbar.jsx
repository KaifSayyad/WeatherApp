import React from 'react';
import '../../assets/css/Navbar.css';

const Navbar = (props) => {

  console.log('isUserLoggedIn', props.isUserLoggedIn);

    return (
        <nav>
        <ul>
          <li><button onClick={() => props.navigate('home')}>Home</button></li>
          <li><button style={{display: props.isUserLoggedIn ? 'none' : 'block'}} onClick={() => props.navigate('login')}>Login</button></li>
          <li><button style={{display: props.isUserLoggedIn ? 'block' : 'none'}} onClick={props.handleLogout}>Logout</button></li>
          <li><button style={{display : props.isUserLoggedIn ? 'none' : 'block'}} disabled={props.isUserLoggedIn} onClick={() => props.navigate('signup')}>Sign Up</button></li>
        </ul>
      </nav>
    );
}

export default Navbar;
