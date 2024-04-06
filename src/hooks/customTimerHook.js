import { useEffect, useState } from "react";
import { isBefore } from "date-fns";

export default function useCustomTimer({ startTime, endTime, onEnd }) {
  const [isRunning, setIsRunning] = useState(isBefore(startTime, new Date()));

  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const targetTime = isRunning ? endTime : startTime;

    const difference = targetTime.getTime() - currentTime.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTimeLeft = calculateTimeLeft();
      setTimeLeft(currentTimeLeft);

      if (
        currentTimeLeft.days === 0 &&
        currentTimeLeft.hours === 0 &&
        currentTimeLeft.minutes === 0 &&
        currentTimeLeft.seconds === 0 &&
        isRunning
      ) {
        // Timer reached 0 and competition is running, reset the timer
        setIsRunning(false); // Set competition as ended

        if (onEnd) onEnd();
      } else if (!isRunning && isBefore(startTime, new Date())) {
        // Competition is not running, but start_time has passed, set competition as running
        setIsRunning(true);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [startTime, endTime, isRunning]);

  return {
    isRunning,
    days: timeLeft.days,
    hours: timeLeft.hours,
    minutes: timeLeft.minutes,
    seconds: timeLeft.seconds,
  };
}
