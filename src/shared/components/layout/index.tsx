import React, {ReactNode} from "react";
import {NavBar} from "shared/components";
interface IProps {
  mobile?: boolean;
  children: ReactNode;
  movieID: string;
}

const DefaultLayout = (props: IProps) => {
  const {children, mobile, movieID} = props;
  return (
    <div>
      <NavBar movieID={movieID} mobile={mobile} />
      <div className="h-auto">{children}</div>
    </div>
  );
};

export default DefaultLayout;
