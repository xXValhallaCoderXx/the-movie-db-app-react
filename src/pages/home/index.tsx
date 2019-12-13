import React, {ReactNode, Dispatch} from "react";
import {debounce, Fetch} from "shared/utils";
import {homeReducer, isOnChangeAction} from "./home-reducer";
import HomeView from "./view";

interface IProps {
  children: ReactNode;
}

const HomePageContainer = ({children}: IProps) => {
  const initialState = {
    value: ""
  };
  // const [state, actions] = React.useReducer(homeReducer, initialState);
  const movieApiCall = (name: string) =>
    Fetch.searchMovie(name)
      .then(res => {
        console.log("RESPONSE: ", res);
      })
      .catch(err => {
        console.log("RERRO: ", err);
      });
  const debounceOnChange = debounce((name: string) => {
    movieApiCall(name);
  }, 500);
  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
  }
  return <HomeView onSubmit={onSubmit} onChange={debounceOnChange} />;
};

export default HomePageContainer;
