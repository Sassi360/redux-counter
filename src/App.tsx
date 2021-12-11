import { useState } from "react";
import "./App.css";
import InputCounter from "./feature/InputCounter/InputCounter";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const reset = () => {
    setCounter((prevCounter) => (prevCounter = 0));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="my-6 text-4xl font-bold">Redux counter</h1>
      <InputCounter
        placeholder="Start Counting"
        type="number"
        value={counter}
      />
      <div className="my-4 space-x-4">
        <button className="px-3 py-1 border-2 rounded-lg" onClick={increment}>
          Increment
        </button>

        <button className="px-3 py-1 border-2 rounded-lg" onClick={decrement}>
          Decrement
        </button>
      </div>
      <button
        onClick={reset}
        className="px-3 py-1 text-white bg-red-600 border-2 rounded-lg focus:ring-2 focus:ring-red-600"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
