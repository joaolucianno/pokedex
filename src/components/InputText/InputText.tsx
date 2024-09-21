import { Container } from './InputText.styles';

interface InputTextProps {
  placeholder?: string;
  value?: string;
  style?: React.CSSProperties;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({ placeholder, value, style, onChange }: InputTextProps): JSX.Element => (
  <Container style={style} placeholder={placeholder} onChange={onChange} value={value} />
);
