import { FaMinus, FaPlus } from "react-icons/fa";
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
        className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
      />
      <div className="my-4 space-x-4">
        <Button
          className="px-5 py-2 border-2 rounded-lg"
          onClick={() => dispatch(decrement())}
          variant="secondary"
        >
          <FaMinus />
        </Button>
        <Button
          className="px-5 py-2 border-2 rounded-lg"
          onClick={() => dispatch(increment())}
          variant="secondary"
        >
          <FaPlus />
        </Button>
      </div>
      <Button
        onClick={() => dispatch(reset())}
        className="px-4 py-1 text-white bg-red-500 border-2 rounded-lg focus:ring-2 focus:ring-red-500"
        variant="primary"
        type="reset"
      >
        Reset
      </Button>
    </div>
  );
}

export default App;
