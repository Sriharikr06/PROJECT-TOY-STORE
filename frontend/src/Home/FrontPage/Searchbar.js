import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
const SearchBar = ({setSearchQuery}) => (
    <>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Search"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      
      </>
   
  );
  export default SearchBar;