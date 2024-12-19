import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const LevelSelector = ({ onTypeChange }) => {
  const WORD_TYPES = ["", "A1", "A2", "B1", "B2", "C1", "C2"];
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

export default LevelSelector;
