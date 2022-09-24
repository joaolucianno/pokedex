import { MouseEventHandler } from "react"

type ButtonShape = {
  onClick?: MouseEventHandler,
  className?: string
  children?: React.ReactNode,
}

const Button: React.FC<ButtonShape> = ({ onClick = () => {}, className = '', children}) => {
  return <button onClick={onClick} className={className}>{children}</button>
};

export default Button;
