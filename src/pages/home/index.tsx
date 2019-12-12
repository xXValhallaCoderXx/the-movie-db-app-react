import React, {ReactNode} from "react";
import HomeView from "./view";
// import {Fetch} from "shared/utils";
// const styles = require("./home.module.scss");

interface IProps {
  children: ReactNode;
}

const HomePageContainer = ({children}: IProps) => {
  const [showMessage, setShowMessage] = React.useState(false);
  // return (
  //   <div>
  //     <input
  //       data-testid="test-checkbox"
  //       id="toggle"
  //       type="checkbox"
  //       onChange={e => setShowMessage(e.target.checked)}
  //       checked={showMessage}
  //     />
  //     {showMessage ? children : null}
  //   </div>
  // );
  return <HomeView />;
};

export default HomePageContainer;
