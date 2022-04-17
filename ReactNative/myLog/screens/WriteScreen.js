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

function WriteScreen({route}) {
  console.log(JSON.stringify(route, null, 2));
  const log = route.params?.log;
  const navigation = useNavigation();
  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const {onCreate, onModify} = useContext(LogContext);
  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: log.date,
        title,
        body,
      });
    } else {
      onCreate({
        title,
        body,
        date: new Date().toISOString(),
      });
    }
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
