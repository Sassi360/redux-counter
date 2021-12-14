import cn from "classnames";
import s from "./Input.module.css";
import { FC, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (...args: any[]) => any;
}

const Input: FC<InputProps> = (props) => {
  const { className, children, onChange, ...rest } = props;

  const rootClassName = cn(s.root, {}, className);

  return (
    <label>
      <input
        className={rootClassName}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  );
};

export default Input;
