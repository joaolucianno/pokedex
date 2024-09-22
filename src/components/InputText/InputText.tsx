import { Container } from './InputText.styles';

interface InputTextProps {
  hasError?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({ hasError, placeholder, style, value, onChange }: InputTextProps): JSX.Element => (
  <Container
    style={style}
    className={hasError ? 'input-error' : undefined}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);
