import ArrowControl from "../ArrowControl/ArrowControl";
import { Screen } from "../Screen/Screen";
import { Search } from "../Search/Search";
import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <div className="left-side">
        <div className="header"></div>
        <div className="curve1">
          <div className="details">
            <div className="big-lens">
              <div className="reflect"></div>
            </div>
            <div className="three-btn">
              <div className="small-btn btn-red"></div>
              <div className="small-btn btn-yellow"></div>
              <div className="small-btn btn-green"></div>
            </div>
          </div>
        </div>
        <div className="curve2">
          <div className="connection">
            <div className="separator"></div>
            <div className="separator"></div>
          </div>
        </div>
        <div className="content">
          <Screen className="screen" />
        </div>
        <div className="footer">
          <div className="btns">
            <div className="big-btn"></div>
            <div className="select-btn"></div>
            <div className="start-btn"></div>
            <ArrowControl />
          </div>
          <Search className="search" />
        </div>
      </div>
    </Container>
  );
}