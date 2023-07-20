import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toString());
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log("component mounted or updated");
    const interval = setInterval(showDate, 1000);

    return () => {
      console.log("cleanup of Interval");
      clearInterval(interval);
    };
  }, [time]);

  function showDate() {
    //   console.log(new Date().toString());
    setTime(new Date().toString());
  }

  return <div>{time}</div>;
}

export default Clock;
