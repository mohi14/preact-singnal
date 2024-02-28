import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import { signal } from '@preact/signals-react';

function App() {
  console.log("rendering app...");
  // const [count, setCount] = useState(0)


  const count = signal(0)   // declaring initial state

  const update = (val) => count.value += val //modifing the state value

  return (
    <div
      style={{
        padding: "5px",
      }}
    >
      {/* <Counter /> */}
      <h1>Count: {count}</h1>
      {/* <h1>Double: {double}</h1> */}

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => update(1)}>Increment</button>
        <button onClick={() => update(-1)}>Decrement</button>
      </div>
    </div>
  )
}

export default App
