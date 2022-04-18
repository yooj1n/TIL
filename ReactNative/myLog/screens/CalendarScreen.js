import {format} from 'date-fns';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CalendarView from '../components/CalendarView';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';

function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});
  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );
  console.log(JSON.stringify(filteredLogs, null, 2));
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  block: {},
});

export default CalendarScreen;
