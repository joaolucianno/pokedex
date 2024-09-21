import { SvgIcon } from '@mui/material';
import { Container } from './Button.styles';

interface ButtonProps {
  icon?: typeof SvgIcon;
  label?: string;
  onClick: () => void;
}

export const Button = ({ icon, label, onClick }: ButtonProps): JSX.Element => {
  return (
    <Container onClick={onClick} type='button'>
      {label}
      {icon && <SvgIcon component={icon} inheritViewBox />}
    </Container>
  );
};
