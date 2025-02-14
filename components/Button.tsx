interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
};

export default Button;
