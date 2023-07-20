import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";
import { useState } from "react";

function App() {
  const [flag, setFlag] = useState(true);
  const userInfo = {
    firstname: "Pedro",
    lastname: "Diaz",
  };

  const toggle = () => {
    console.log("Toggle Clicked");
    setFlag(!flag);
  };

  return (
    <>
      <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button>
      {flag ? <Clock /> : "No Clock Component"}
      {/* <Welcome user="Pedro" />
      <Welcome user="Santiago" />
      <Welcome user="Rodrigo" /> */}
    </>
  );
}

export default App;
