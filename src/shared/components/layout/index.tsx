import React, {ReactNode} from "react";
import {NavBar} from "shared/components";
interface IProps {
  mobile?: boolean;
  children: ReactNode;
}

const DefaultLayout = (props: IProps) => {
  const {children, mobile} = props;
  return (
    <div className="">
      <NavBar mobile={mobile} />
      {children}
    </div>
  );
};

export default DefaultLayout;
