import React, { useState, useEffect } from 'react';

function Main({ initialSeconds }) {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds > 0) {
            const interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);

            return () => clearInterval(interval); // Cleanup on unmount or when seconds changes
        }
    }, [seconds]);

    const calculateTimeUnits = (totalSeconds) => {
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const remainingSeconds = totalSeconds % 60;
        return { days, hours, minutes, remainingSeconds };
    };

    const { days, hours, minutes, remainingSeconds } = calculateTimeUnits(seconds);

    return (
        <div >
        <h1 style={{
             margin: '0 auto',
             display: 'flex',
             justifyContent: 'space-between',
             alignItems: 'center',
             width: '500px', 
        }}>Countdown</h1>

        <div style={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '400px', 
        }}>
            <span>{days} Days </span>
            <span>{hours} Hours </span>
            <span>{minutes} Minutes </span>
            <span>{remainingSeconds < 10 ? '0' : ''}{remainingSeconds} Seconds</span>
        </div>
        {seconds === 0 && <h2 style={{
             margin: '0 auto',
             display: 'flex',
             justifyContent: 'space-between',
             alignItems: 'center',
             width: '400px', 
        }}>Time's up!</h2>}
    </div>
    );
}

export default Main;
