import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CircleButton({name, color, onPress, hasmarginRight}) {
  return (
    <View
      style={[styles.iconButtonWrapper, hasmarginRight && styles.marginRight]}>
      <Pressable
        style={({pressed}) => [
          styles.iconButton,
          Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
        ]}
        onPress={onPress}>
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  marginRight: {
    marginRight: 8,
  },
});

export default CircleButton;
