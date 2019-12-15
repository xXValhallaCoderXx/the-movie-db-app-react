import "shared/styles/index.scss";
import "shared/utils/prototypes";
import React from "react";
import {render} from "react-dom";
import Routes from "./routes";
const root = document.getElementById("render-app");

render(<Routes />, root);
