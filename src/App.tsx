import { useDispatch, useSelector } from "react-redux";
import Button from "./components/core/Button/Button";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
  selectCount,
} from "./state/counter-slice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const handleOnChange = (e: any) => {
    dispatch(incrementByAmount(Number(e.target.value)));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="my-6 text-4xl font-bold">Redux counter</h1>
      <input
        placeholder="Start Counting"
        type="number"
        value={count}
        onChange={handleOnChange}
      />
      <div className="my-4 space-x-4">
        <Button
          className="px-3 py-1 border-2 rounded-lg"
          onClick={() => dispatch(decrement())}
          variant="secondary"
        >
          Decrement
        </Button>
        <Button
          className="px-3 py-1 border-2 rounded-lg"
          onClick={() => dispatch(increment())}
          variant="secondary"
        >
          Increment
        </Button>
      </div>
      <Button
        onClick={() => dispatch(reset())}
        className="px-3 py-1 text-white bg-red-600 border-2 rounded-lg focus:ring-2 focus:ring-red-600"
        variant="primary"
      >
        Reset
      </Button>
    </div>
  );
}

export default App;
