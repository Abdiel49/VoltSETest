import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {TextInputComponentProps} from '../../types';
import {Colors} from '../../styles/colors';

const TextInputComponent = (props: TextInputComponentProps) => {
  return (
    <TextInput
      {...props}
      testID={props.testID || 'TextInputComponentID'}
      style={[styles.input, props.style]}
      onChangeText={props.onChangeText}
      value={props.value || ''}
      placeholder={props.placeholder || ''}
      placeholderTextColor={`${Colors.gray_600}`}
      keyboardType={props.keyboardType || 'default'}
    />
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    margin: 0,
    padding: 0,
    color: Colors.text,
  },
});
