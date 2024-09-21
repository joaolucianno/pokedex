import { Container, Header } from "./Display.styles";

interface DisplayProps {
  title: string;
  children?: React.ReactNode;
} 

export const Display = ({ title, children }: DisplayProps): JSX.Element => {
  return (
    <Container>
      <Header>{title}</Header>
      {children}
    </Container>
  );
};
