import React, { useState } from "react";
import Form from "../Form/Form";
import "./App.css";
function App() {
  console.log(1);
  console.log(2);
  return (
    <>
      <div className="container-paragraph">
        <h1>To-do list</h1>
      </div>
      <div className="container-form">
        <Form />
      </div>
    </>
  );
}

export default App;
