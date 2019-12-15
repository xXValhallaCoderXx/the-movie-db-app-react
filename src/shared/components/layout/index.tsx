import React, {ReactNode} from "react";
import {NavBar} from "shared/components";
interface IProps {
  children: ReactNode;
}

const DefaultLayout = (props: IProps) => {
  const {children} = props;
  return (
    <div className="h-screen">
      <NavBar />
      {children}
    </div>
  );
};

export default DefaultLayout;
