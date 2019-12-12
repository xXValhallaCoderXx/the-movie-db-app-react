import React from "react";
import {Fetch} from "shared/utils";
const styles = require("./home.module.scss");

const HomePageContainer = () => {
  React.useEffect(() => {
    Fetch.searchMovie("matrix")
      .then(res => console.log("RES: ", res))
      .catch(err => console.log("ERROR: ", err));
  }, []);
  return <div>Hello</div>;
};

export default HomePageContainer;
