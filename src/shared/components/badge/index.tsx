import React, {ReactNode} from "react";

interface IProps {
  color: string;
  children: ReactNode;
  className: any;
}

const Badge = ({color, children, className}: IProps) => {
  return (
    <span
      className={`inline-block bg-teal-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mr-2 ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
