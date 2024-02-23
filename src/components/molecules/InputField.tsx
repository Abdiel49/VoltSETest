import {KeyboardTypeOptions, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TextComponent from '../atoms/TextComponent';
import TextInputComponent from '../atoms/TextInputComponent';
import {Colors} from '../../styles/colors';
import {gStyles} from '../../styles/gStyles';

type InputFieldProps = {
  keyboardtype?: KeyboardTypeOptions;
  onChange?: (text: string) => void;
  value?: string;
  label?: string;
};

const InputField = (props: InputFieldProps) => {
  const [value, setValue] = useState('');

  const handleOnChange = (text: string) => {
    setValue(text);
    props.onChange && props.onChange(text);
  };

  return (
    <View style={styles.container}>
      <TextComponent text={props.label || 'InputLabel'} />
      <View style={[styles.inputContainer, gStyles.shadow_10]}>
        <TextInputComponent
          style={styles.input}
          value={value}
          keyboardType={props.keyboardtype}
          onChangeText={handleOnChange}
        />
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 5,
    alignItems: 'center',
    margin: 5,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    width: 60,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    // backgroundColor: Colors.white,
  },
});
