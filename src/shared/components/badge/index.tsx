import React, {ReactNode} from "react";

interface IProps {
  color: string;
  children: ReactNode;
}

const Badge = ({color, children}: IProps) => {
  return (
    <span className="inline-block bg-teal-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mr-2">
      {children}
    </span>
  );
};

export default Badge;
