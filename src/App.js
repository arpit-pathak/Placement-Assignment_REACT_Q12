import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Counter app using State</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset counter</button>
      <button onClick={() => (count >= 10 ? "" : setCount(count + 1))}>
        increase counter
      </button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
        decrease counter
      </button>
    </div>
  );
}

export default App;

// 8/11/2022 18:05
