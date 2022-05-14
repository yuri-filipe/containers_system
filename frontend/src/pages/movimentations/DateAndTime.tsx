import React from "react";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";
interface DateAndTimeProps {
  date: any;
  setDate(value: any): void;
}

export default function DateAndTime({ date, setDate }: DateAndTimeProps) {
  const handleChange = (value: any) => {
    setDate(value);
  };

  return (
    <Box>
      <DateTimePicker className="date-time-picker" onChange={handleChange} value={date} />
    </Box>
  );
}
const Box = styled.div``;
