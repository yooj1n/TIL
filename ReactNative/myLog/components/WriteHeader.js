import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import CircleButton from './CircleButton';

function WriteHeader({onSave}) {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <CircleButton name="arrow-back" color="#424242" onPress={goBack} />
      <View style={styles.buttons}>
        <CircleButton name="delete-forever" color="#ef5350" hasmarginRight />
        <CircleButton name="check" color="#0C5EE8" onPress={onSave} />
      </View>
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
});

export default WriteHeader;
