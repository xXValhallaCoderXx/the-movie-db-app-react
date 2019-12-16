import React from "react";

interface IProps {
  id?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  value?: string;
}

const Input = (props: IProps) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={props.id}
      type={props.type || "text"}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
