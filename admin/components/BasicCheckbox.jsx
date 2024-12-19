import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const BasicCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          color="primary" // Màu sắc: primary, secondary, default
        />
      }
      label="Đã Kiểm Tra"
    />
  );
};

export default BasicCheckbox;
