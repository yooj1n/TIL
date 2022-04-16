import React, {useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function WriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const bodyRef = useRef();
  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요."
        style={styles.titleInput}
        returnKeyType="next"
        value={title}
        onChangeText={onChangeTitle}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <TextInput
        placeholder="오늘은 기록해보세요."
        style={styles.bodyInput}
        value={body}
        onChangeText={onChangeBody}
        textAlignVertical="top"
        multiline
        ref={bodyRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, padding: 16},
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export default WriteEditor;
