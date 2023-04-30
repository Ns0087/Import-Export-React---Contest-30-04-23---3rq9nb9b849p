import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./Heading.js"
import SubHeading from "./SubHeading.js"
import InputQuery from "./InputQuery.js"
import Submit from "./Submit.js"

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <Submit />
    </div>
  )
}

export default App;
