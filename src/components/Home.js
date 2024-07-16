import React, { useEffect, useState } from 'react';

function Home() {
    const [time, setTime] = useState({
        hour: '',
        minutes: '',
        seconds: '',
        date: '',
        month: '',
        year: '',
        day: '',
        ampm: ''
    });

    const showTime = () => {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        setTime({
            hour: h < 10 ? '0' + h : h,
            minutes: m < 10 ? '0' + m : m,
            seconds: s < 10 ? '0' + s : s,
            date: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            day: date.toLocaleDateString('en-US', { weekday: 'long' }),
            ampm: h >= 12 ? 'PM' : 'AM'
        });
    };

    useEffect(() => {
        const interval = setInterval(showTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const fullScreen = () => {
        let elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    };

    return (
        <div className="container">
            <div className="clock">
                <div className="date-section">
                    {/* <p>{`${time.year}.${time.month}.${time.date} ${time.day}`}</p> */}
                    <p>{`${time.year}.${time.month < 10 ? '0' + time.month : time.month}.${time.date < 10 ? '0' + time.date : time.date} ${time.day}`}</p>
                </div>
                <div className="timer">
                    <p className='ampm'>{time.ampm}</p>
                    <p className="timer-text">{time.hour}</p>
                    <p className="timer-symbole">:</p>
                    <p className="timer-text">{time.minutes}</p>
                    <p className="timer-symbole">:</p>
                    <p className="timer-text">{time.seconds}</p>
                </div>
            </div>
            <div className="footer" onClick={fullScreen}>
                <p>FULL SCREEN</p>
            </div>
        </div>
    );
}

export default Home;
