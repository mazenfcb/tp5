import './App.css'
import React from 'react'
import { ClickButton, ToggleButton, MainApp, Counter } from './ex01'
import { DisplayTab } from './ex02'
import { AuthForm } from './ex03';
import { AddDivForm } from './ex04'
const tab1 = ["hello", "world", "from", "react"]
const tab2 = ["apple", "banana", "cherry"]

const border = { border: "2px solid black", padding: "10px", margin: "10px" }


const App = () => {
  return (
    <div>
      <div style={border}>
        <h1>
          ex1
        </h1>
        <h2>ClickButton Component</h2>
        <ClickButton />
        <h2>ToggleButton Component</h2>
        <ToggleButton />
        <h2>MainApp Component</h2>
        <MainApp />
        <h2>Counter Component</h2>
        <Counter />
      </div>

      <div style={border}>
        <h1>Exercise 2</h1>
        <h2>DisplayTab Component 1</h2>
        <DisplayTab tab={tab1} />
        <h2>DisplayTab Component 2</h2>
        <DisplayTab tab={tab2} />
      </div>

      <div style={border}> <h1>Exercise 3</h1>
        <h2>AuthForm Component</h2>
        <AuthForm />
      </div>
      
      <div style={border}>
        <h1>Exercise 4</h1>
        <h2>AddDivForm Component</h2>
        <AddDivForm /> 
        </div>
    </div>
  );
};

export default App;

