import classNames from "classnames";
import { FC } from "react";

type Props = {
  text: String;
  style: string;
};

const Button: FC<Props> = ({ text, style, ...props }) => {
  return (
    <button
      {...props}
      className={classNames("px-3 py-1 border-2 rounded-lg", style)}
    >
      {text}
    </button>
  );
};

export default Button;
