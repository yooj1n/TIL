import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext from '../contexts/LogContext';

function FeedScreen() {
  const {text, setText} = useContext(LogContext);
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedScreen;
