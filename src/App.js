
import './App.css';
import Main from './components/Main';
import React, { useState } from 'react';
function App() {
  const backgroundImage = 'url("clock.avif")';

  const [inputValues, setInputValues] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  const [startCountdown, setStartCountdown] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: parseInt(value, 10) || 0,  // Convert to integer and handle empty input
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { days, hours, minutes, seconds } = inputValues;
    const totalSeconds = days * 24 * 3600 + hours * 3600 + minutes * 60 + seconds;
    setTotalSeconds(totalSeconds);
    setStartCountdown(true);
  };

  return (
    <div >
       <div    style={{
          backgroundImage,
          backgroundSize: 'cover', // Adjust as needed (cover, contain, etc.)
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // Ensure the background covers the entire viewport
        }}>
    <h1 className='h'>My Countdown Timer</h1>
    
    {!startCountdown && (
      <form onSubmit={handleSubmit}>
        <div >
          <label>
            Days: 
            <input type="number" name="days" value={inputValues.days} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Hours: 
            <input type="number" name="hours" value={inputValues.hours} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Minutes: 
            <input type="number" name="minutes" value={inputValues.minutes} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Seconds: 
            <input type="number" name="seconds" value={inputValues.seconds} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Start Countdown</button>
      </form>
    )}
    
    {startCountdown && <Main initialSeconds={totalSeconds} />}
    </div>
  </div>
  );
}

export default App;
