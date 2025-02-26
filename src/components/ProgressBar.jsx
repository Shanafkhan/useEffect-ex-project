import { useEffect, useState } from "react";

export default function ProgressBar({ time }) {
  const [remainigTime, setRemainingTime] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainigTime} max={time} />;
}
