import React, { useEffect, useState } from "react";
import Select from "react-select";

const WordSelector = ({ onChange, placeholder }) => {
  const [options, setOptions] = useState([]); // Lưu danh sách từ vựng
  const [selectedOptions, setSelectedOptions] = useState([]); // Lưu danh sách đã chọn

  // Tải danh sách từ vựng từ file JSON
  useEffect(() => {
    fetch("/vocabulary.json")
      .then((response) => response.json())
      .then((value) => {
        setOptions(value);
      })
      .catch((error) => console.error("Error loading vocabulary:", error));
  }, []);

  const handleChange = (selected) => {
    setSelectedOptions(selected); // Cập nhật danh sách đã chọn
    if (onChange) {
      const labels = selected.map(option => option.label);
      onChange(labels); // Callback gửi dữ liệu ra ngoài (nếu được truyền)
    }
  };

  return (
    <Select
      options={options} // Danh sách từ
      isMulti // Cho phép chọn nhiều
      value={selectedOptions} // Giá trị hiện tại
      onChange={handleChange} // Xử lý sự kiện khi chọn
      placeholder={placeholder || "Chọn từ..."} // Placeholder mặc định
      closeMenuOnSelect={false} // Menu không đóng sau khi chọn
    />
  );
};

export default WordSelector;
