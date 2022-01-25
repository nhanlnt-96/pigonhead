import React, {useEffect, useState} from "react";

export const CountDownComp = () => {
  const countDownDate = new Date("Jan 21, 2022 18:00:00").getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();
      
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      
      // If the count down is over, write some text
      if (distance < 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
  });
  return (
    <div className="countdown-container">
      <h2 className="countdown-title">Countdown to Presale day</h2>
      <div className="coming-soon">
        <h6 className="text">Coming Soon</h6>
      </div>
      {/* <div className="countdown-detail">
        <div className="days">{(days <= 0) ? "00" : days < 10 ? `0${days}` : days}</div>
        <div className="hours">{(hours <= 0) ? "00" : hours < 10 ? `0${hours}` : hours}</div>
        <div className="minutes">{(minutes <= 0) ? "00" : minutes < 10 ? `0${minutes}` : minutes}</div>
        <div className="seconds">{(seconds <= 0) ? "00" : seconds < 10 ? `0${seconds}` : seconds}</div>
      </div> */}
    </div>
  );
};