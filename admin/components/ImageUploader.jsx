import React, { useState } from "react";
import { Button } from "@mui/material";

const ImageUploader = ({ onImageUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      onImageUpload(file.name);
    }
  };

  return (
    <div>
      <Button variant="contained" component="label">
        Chọn hình ảnh
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
      </Button>
      {preview && (
        <img
          src={preview}
          alt="Xem trước"
          style={{ width: "200px", height: "auto", marginTop: "10px" }}
        />
      )}
    </div>
  );
};

export default ImageUploader;
