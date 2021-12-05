import React, { useState } from 'react';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import CalendarExam from './CalendarExam';
import '../css/Calendar.css';

const CalendarChip = styled(Chip)({
  
})

function CalendarComp() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue: Date) {
    setValue(nextValue)
  }

  function chipClick() {
    
  }

  function tileContent(config: CalendarTileProperties): JSX.Element | null {
    if (config.view === 'month') {
      return (
        <CalendarExam examDate={config.date} />
      )
    } else {
      return null
    }
  }

  return (
    <Container>
        <Calendar
            calendarType = "US"
            value = {value}
            onChange = {onChange}
            tileContent = {tileContent}
        />
    </Container>
  );
}

export default CalendarComp;