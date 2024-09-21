import { SvgIcon } from '@mui/material';
import { Button as ButtonUI } from './Button.styles';

interface ButtonProps {
  icon?: typeof SvgIcon;
  label?: string;
  onClick: () => void;
}

export const Button = ({ icon, label, onClick }: ButtonProps): JSX.Element => {
  return (
    <ButtonUI onClick={onClick} type='button'>
      {label}
      {icon && <SvgIcon component={icon} inheritViewBox />}
    </ButtonUI>
  );
};
