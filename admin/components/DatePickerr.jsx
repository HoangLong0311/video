import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns'; // Hoặc AdapterDayjs nếu bạn dùng dayjs
import { TextField } from '@mui/material';
import React, { useState } from 'react';

function DatePickerr() {
  // State để lưu giá trị ngày chọn, mặc định là ngày hôm nay
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Chọn ngày"
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)} // Cập nhật ngày khi người dùng chọn
        renderInput={(params) => <TextField {...params} />}
        inputFormat="dd/MM/yyyy"
        disableFuture // Tùy chọn để không cho phép chọn ngày trong tương lai
      />
    </LocalizationProvider>
  );
}

export default DatePickerr;
