import React, {ReactNode} from "react";

interface IProps {
  children: ReactNode;
}

const DefaultLayout = (props: IProps) => {
  const {children} = props;
  return (
    <div>
      <div style={{height: 60}} />
      {children}
    </div>
  );
};

export default DefaultLayout;
