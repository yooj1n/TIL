import React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

function CalendarView({markedDates, selectedDate, onSelectDate}) {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      onDayPress={day => {
        onSelectDate(day.dateString);
      }}
      theme={{
        selectedDayBackgroundColor: '#0C5EE8',
        arrowColor: '#0C5EE8',
        dotColor: '#0C5EE8',
        todayTextColor: 'white',
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
});

export default CalendarView;
