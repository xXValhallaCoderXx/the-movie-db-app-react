import React from "react";
import {Input} from "shared/components";

interface IProps {
  onSearchChange: any;
}

const SearchBar = ({onSearchChange}: IProps) => {
  const [value, setValue] = React.useState("");
  function onChange(e: any) {
    setValue(e.currentTarget.value);
    onSearchChange(e.currentTarget.value);
  }
  return (
    <Input
      value={value}
      placeholder="Enter movie title..."
      onChange={onChange}
    />
  );
};

export default SearchBar;
