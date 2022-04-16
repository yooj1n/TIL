import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import LogContext from '../contexts/LogContext';

function WriteScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const {onCreate} = useContext(LogContext);
  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          onChangeTitle={setTitle}
          body={body}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'white'},
  avoidingView: {flex: 1},
});

export default WriteScreen;
