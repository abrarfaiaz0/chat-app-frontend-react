import { useState } from "react";
import "./App.css";
import Aside from "./components/Aside";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Aside />
      <Signup />
      <Login />
    </>
  );
}

export default App;
