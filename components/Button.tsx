interface ButtonProps {
  onClick?: () => void;
  className: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
