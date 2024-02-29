import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TextInputComponent from '../atoms/TextInputComponent';

import normalize from '../../helpers/normalizeFontSize';

import {Colors} from '../../styles/colors';
import {gStyles} from '../../styles/gStyles';

interface SearchComponentProps {
  onSearch?: (text: string) => void;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  autoSearch?: boolean;
  lengthLot?: number;
  value?: string;
}

const SearchComponent = (props: SearchComponentProps) => {
  const [value, setValue] = useState<string>(props.value || '');

  const onChangeInput = (text: string) => {
    setValue(text);
    props.onChangeText && props.onChangeText(text);
    if (
      props.autoSearch &&
      props.onSearch &&
      text.length % (props.lengthLot || 3) === 0
    ) {
      console.log('props. auto search execute');
      props.onSearch(text);
    }
  };

  const handleSearch = () => {
    if (props.onSearch) {
      props.onSearch(value.trim());
    }
  };

  return (
    <View style={[styles.container, gStyles.shadow_10]}>
      <Ionicons name="search" style={styles.icon} onPress={handleSearch} />
      <TextInputComponent
        placeholder={props.placeholder || 'Buscar'}
        placeholderTextColor={Colors.red}
        style={styles.input}
        value={value}
        defaultValue={value}
        returnKeyType="search"
        onChangeText={onChangeInput}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    borderRadius: normalize(26),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(8),
  },
  icon: {
    fontSize: normalize(18),
    marginRight: normalize(10),
    color: Colors.black,
  },
  input: {
    flex: 1,
    color: Colors.black,
  },
});
