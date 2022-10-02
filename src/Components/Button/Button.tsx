import { MouseEventHandler } from "react";

type ButtonProps = {
  onClick?: MouseEventHandler,
  className?: string
  children?: React.ReactNode,
}

const Button: React.FC<ButtonProps> = ({ onClick = () => {}, className = '', children}) => {
  return <button onClick={onClick} className={className}>{children}</button>
};

export default Button;
