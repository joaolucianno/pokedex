import { Container } from './SystemButton.styles';

type SystemButtonProps = {
  color: 'red' | 'yellow' | 'green';
};

export const SystemButton = ({ color }: SystemButtonProps): JSX.Element => <Container className={color} />;
