import React, {ReactNode, Dispatch} from "react";
import {homeReducer, isOnChangeAction} from "./home-reducer";
import HomeView from "./view";
// import {Fetch} from "shared/utils";
// const styles = require("./home.module.scss");

interface IProps {
  children: ReactNode;
}

const HomePageContainer = ({children}: IProps) => {
  const initialState = {
    value: ""
  };
  const [state, actions] = React.useReducer(homeReducer, initialState);
  console.log("STATE: ", state);
  console.log("ACTIONS: ", actions);
  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
  }
  function onChange(event: React.FormEvent) {
    actions(isOnChangeAction(""));
  }
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
  return <HomeView onSubmit={onSubmit} onChange={onChange} value="" />;
};

export default HomePageContainer;
