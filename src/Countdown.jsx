import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentDate = new Date();
      const endDate = new Date(currentDate.getFullYear(), 11, 31, 23, 59, 59); // December 31st at 23:59:59

      // Calculate the time difference in milliseconds
      const difference = endDate - currentDate;

      let totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

      let marketOpenDays = 0;
      let dayCount = 0;

      while (marketOpenDays < totalDays) {
        const day = new Date(currentDate.getTime() + dayCount * 24 * 60 * 60 * 1000);
        const dayOfWeek = day.getDay();

        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          marketOpenDays++;
        }
        dayCount++;
      }

      const remainingTime = difference - (totalDays - marketOpenDays) * 24 * 60 * 60 * 1000;

      const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
      const seconds = Math.floor((remainingTime / 1000) % 60);

      setTimeLeft({
        days: marketOpenDays,
        hours,
        minutes,
        seconds,
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-l from-zinc-400 to-zinc-900 text-white">
      <h1 className="text-4xl font-bold mb-4">New Year Countdown 2025</h1>
      <p className="text-2xl">Time left:</p>
      <div className="text-6xl font-extrabold mt-4">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
      <p className="mt-6 text-lg">Excludes Saturdays and Sundays IFYKYK</p>
    </div>
  );
};

export default Countdown;
