import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button"

function StopWatch() {
  const [time, SetTime] = useState(0);
  const [IsRunning, SetIsRunning] = useState(false)

  useEffect(() => {
    let interval;
    if(IsRunning) {
      interval = setInterval(() => {
        SetTime((prevTime) => prevTime + 10);
      }, 10);
    }
    else if(!IsRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [IsRunning])

  const StartStop = () => {
    SetIsRunning(!IsRunning);
  }

  const Reset = () => {
    SetTime(0);
    SetIsRunning(false);
  }

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div id="div1" style={{ position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"}}>
      <h1>{minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds} :{" "}
        {milliseconds < 10 ? "0" + milliseconds : milliseconds}</h1>
      <div>
      <Button variant="outlined" onClick={Reset}>Reset</Button>
      <Button onClick={StartStop}>{IsRunning ? <Button variant="outlined" color="error">Stop</Button> : <Button variant="outlined" color="success">Start</Button>}</Button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <StopWatch />
    </div>
  )
}
 

export default App;
