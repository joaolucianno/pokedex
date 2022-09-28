import ArrowControl from "../ArrowControl/ArrowControl";
import InfoDisplay from "../InfoDisplay/InfoDisplay";
import Screen from "../Screen/Screen";
import Search from "../Search/Search";
import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <div className="left-side">
        <Screen />
        {/* <InfoDisplay /> */}
        <ArrowControl />
        <Search />
      </div>
    </Container>
  );
}