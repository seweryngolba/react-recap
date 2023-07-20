import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";
import { useState } from "react";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";

function App() {
  const [flag, setFlag] = useState(true);
  const userInfo = {
    firstname: "Pedro",
    lastname: "Diaz",
  };

  const posts = [
    {
      id: 1,
      title: "Hello World",
      content: "Welcome in React",
    },
    {
      id: 2,
      title: "Hello People",
      content: "Welcome in JS",
    },
    {
      id: 3,
      title: "Hello Animals",
      content: "Welcome in HTML",
    },
  ];

  // const toggle = () => {
  //   console.log("Toggle Clicked");
  //   setFlag(!flag);
  // };

  return (
    <>
      {/* <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button>
      {flag ? <Clock /> : "No Clock Component"} */}
      {/* <Welcome user="Pedro" />
      <Welcome user="Santiago" />
      <Welcome user="Rodrigo" /> */}
      {/* <LoginControl /> */}
      <Blog posts={posts} />
    </>
  );
}

export default App;
