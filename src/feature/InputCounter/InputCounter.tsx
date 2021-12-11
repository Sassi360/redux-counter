import { forwardRef } from "react";

type InputProps = Record<string, unknown>;

const InputCounter = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }) => {
    return (
      <input
        className="block px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
        {...props}
      />
    );
  }
);

export default InputCounter;
