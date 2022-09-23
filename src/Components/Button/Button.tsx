import { MouseEventHandler } from "react"

type ButtonShape = {
  onClick?: MouseEventHandler,
  className?: string
  children?: React.ReactNode,
}

export default function Button({ onClick = () => {}, className = '', children }: ButtonShape) {
  return <button onClick={onClick} className={className}>{children}</button>
}