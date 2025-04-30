import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string | ReactNode;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ onClick, text, className, type }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {text}
    </button>
  );
};

export default Button;
