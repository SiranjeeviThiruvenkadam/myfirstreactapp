import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Component1 from './Components/Component1';
import Component2 from './Components/Components2';
import { Component3, Component4 } from './Components/Components2';
import Counter from './Counter/Counter';
import MainCounter from './Counter/Counter';
import MountingComponent from './Lifecycle/Mounting';
import UpdatingComponent from './Lifecycle/Updating';
import UnmountingComponent from './Lifecycle/Unmounting';
import UncontrolledCompound from './Forms/Uncontrolled';
import ControlledCompound from './Forms/Controlled';
import ListComponent from './Components/List';
import ListMainComponent from './List/List';
import TodoComponent from './Todo/Todo';

function App() {
  return (
    <TodoComponent />

  );
}

function HooksComponent() {

  const [color, setcolor] = useState("white");


  return (
    <>
      <div className='colorLabel'>My favourite color is {color}</div>
      <button className='btn btn-primary btn-sm mt-5 ' onClick={() => setcolor("blue")}>Change Color</button>
    </>
  );
}

function HooksCountComponent() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(() => count + 1)
    }, 1000);

  });


  return (
    <>
      <div className='colorLabel' mt-5>Counter is {count}</div>
      <button className='btn btn-primary btn-sm mt-5 ' onClick={() => setCount(() => count + 1)}>Change Count</button>
    </>
  );
}



export default App;
