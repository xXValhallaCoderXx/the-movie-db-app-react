import React from "react";

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
    <input
      value={value}
      placeholder="Enter movie title..."
      onChange={onChange}
    />
  );
};

export default SearchBar;
