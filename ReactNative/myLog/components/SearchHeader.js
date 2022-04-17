import React, {useContext} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchContext from '../contexts/SearchContext';

function SearchHeader() {
  const {width} = useWindowDimensions();
  const {keyword, onChangeText} = useContext(SearchContext);

  return (
    <View style={[styles.block, {width: width - 30}]}>
      <TextInput
        placeholder="검색어를 입력하세요"
        style={styles.input}
        value={keyword}
        onChangeText={onChangeText}
        autoFocus
      />
      <Pressable
        onPress={() => onChangeText('')}
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flexDirection: 'row', alignItems: 'center'},
  input: {flex: 1, fontSize: 16},
  button: {marginLeft: 8},
});

export default SearchHeader;
