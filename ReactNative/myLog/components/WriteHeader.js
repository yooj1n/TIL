import {useNavigation} from '@react-navigation/native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import CircleButton from './CircleButton';

function WriteHeader({onSave, onAskRemove, isEditing, date, onChangeDate}) {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.pop();
  };
  const [mode, setMode] = useState('date');
  const [visible, setVisible] = useState(false);
  const onPressDate = () => {
    setMode('date');
    setVisible(true);
  };
  const onPressTime = () => {
    setMode('time');
    setVisible(true);
  };
  const onConfirm = selectedDate => {
    setVisible(false);
    onChangeDate(selectedDate);
  };
  const onCancel = () => {
    setVisible(false);
  };
  return (
    <View style={styles.block}>
      <CircleButton name="arrow-back" color="#424242" onPress={goBack} />
      <View style={styles.buttons}>
        {isEditing && (
          <CircleButton
            name="delete-forever"
            color="#ef5350"
            hasmarginRight
            onPress={onAskRemove}
          />
        )}
        <CircleButton name="check" color="#0C5EE8" onPress={onSave} />
      </View>
      <View style={styles.center}>
        <Pressable onPress={onPressDate}>
          <Text>{format(new Date(date), 'PPP', {locale: ko})}</Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={onPressTime}>
          <Text>{format(new Date(date), 'p', {locale: ko})}</Text>
        </Pressable>
      </View>
      <DateTimePicker
        date={date}
        isVisible={visible}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});

export default WriteHeader;
