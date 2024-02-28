import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import { batch, computed, effect, signal } from '@preact/signals-react';

function App() {
  console.log("rendering app...");
  // const [count, setCount] = useState(0)


  const count = signal(0)   // declaring initial state
  // const double = signal(0)

  const double = computed(() => count.value * 2) //automaticaly change according to the selected signal value changing

  const update = (val) => count.value += val //modifing the state value

  // const update = (val) => {
  //   batch(() => {
  //     count.value += val;
  //     double.value = count.value * 2  //here by the batch function updating 2 signal value with one function
  //   })
  // }


  effect(() => console.log(`Updated count is ${count.value}`)) //it will render and show the console.log
  effect(() => console.log(`Hello world`)) //it will not render, because there is no signal value.

  return (
    <div
      style={{
        padding: "5px",
      }}
    >
      {/* <Counter /> */}
      <h1>Count: {count}</h1>
      <h1>Double: {double}</h1>

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
