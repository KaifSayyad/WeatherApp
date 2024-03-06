import React, { useState, useEffect } from 'react';
import '../../assets/css/Home_loggerIn.css';
import Navbar from '../UI/Navbar.jsx';

const Home_loggedIn = (props) => {
    const [location, setLocation] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [city_name, setCity_name] = useState(null);

    useEffect(() => {
        // Fetch current location using geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                fetchWeatherData(latitude, longitude);
            });
        }
    }, []);

    const fetchWeatherData = async (latitude, longitude) => {
        const apiKey = '7f31f8bdae6b48d9a29222d1606df16b';
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCurrentWeather(data.data[0]);
                setForecast(data.data.slice(1, 6));
                setCity_name(data.city_name);
            } else {
                console.error('Failed to fetch weather data');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleLocationChange = async () => {
        if (!location.trim()) return;

        const apiKey = '7f31f8bdae6b48d9a29222d1606df16b';
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCurrentWeather(data.data[0]);
                setForecast(data.data.slice(1, 6));
                setCity_name(data.city_name);
            } else {
                console.error('Failed to fetch weather data');
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <div>
            <Navbar isUserLoggedIn={props.isUserLoggedIn} navigate={props.navigate} handleLogout={props.handleLogout}/>
            { (!currentWeather && !forecast) &&
                <div className="spinner"></div>
            }
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                    style={{ width: '150px', marginRight: '10px' }} // Adjust width here
                />
                <button type="submit" onClick={handleLocationChange}>Search</button>
            </div>

            {currentWeather && (
                <div>
                    <h2>Current Weather in {city_name}</h2>
                    <p>Temperature: {currentWeather.temp}°C</p>
                    <p>Description: {currentWeather.weather.description}</p>
                </div>
            )}
            {forecast && (
                <div style={{ textAlign: 'center' }}>
                    <h2>5-Day Forecast</h2>
                    <table class="center-table"> 

                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>High Temp</th>
                                <th>Low Temp</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forecast.map(day => (
                                <tr key={day.valid_date}>
                                    <td>{day.valid_date}</td>
                                    <td>{day.max_temp}°C</td>
                                    <td>{day.min_temp}°C</td>
                                    <td>{day.weather.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Home_loggedIn;
