import React, { useState } from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";

const WordTypeSelector = ({ onTypeChange }) => {
  const WORD_TYPES = ["", "n", "adj", "adv", "v", "con", "pre", "pro", "det"];
  const [selectedType, setSelectedType] = useState("");

  const handleChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    onTypeChange(type);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="word-type-label"></InputLabel>
      <Select
        labelId="word-type-label"
        value={selectedType}
        onChange={handleChange}
      >
        <MenuItem value="">Chọn loại từ</MenuItem>
        {WORD_TYPES.map((type, index) => (
          <MenuItem key={index} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default WordTypeSelector;
