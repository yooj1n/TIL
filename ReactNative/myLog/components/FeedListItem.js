import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

function turncate(text) {
  const replaced = text.replace(/\n/g, ' ');
  if (replaced.length <= 100) {
    return replaced;
  }
  return replaced.slice(0, 100).concat('...');
}

function FeedListItem({log}) {
  const {title, body, date} = log;
  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}>
      <Text style={styles.date}>{new Date(date).toLocaleString()}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{turncate(body)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: '#263238',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    color: '#37474f',
    lineHeight: 21,
  },
});

export default FeedListItem;
