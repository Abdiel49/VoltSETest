import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TextComponentProps} from '../../types';
import normalize from '../../helpers/normalizeFontSize';
import {Colors} from '../../styles/colors';

const TextComponent = (props: TextComponentProps) => {
  return (
    <Text
      testID={props.testID || 'TextComponentID'}
      onPress={props.onPress}
      style={[
        styles.text,
        props.type === 'title' && styles.typeTitle,
        props.type === 'body' && styles.typeBody,
        props.type === 'small' && styles.typeSmall,
        props.type === 'medium' && styles.typeMedium,
        props.H2 && styles.h2,
        props.center && styles.centerText,
        props.bold && styles.boldText,
        props.isUnderline && styles.underline,
        props.gray && styles.textGray,
        props.yellow && styles.textYellow,
        props.green && styles.textGreen,
        props.style,
      ]}>
      {props.text}
    </Text>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  text: {
    margin: 0,
    padding: 0,
    fontSize: normalize(16),
    color: Colors.text,
    // fontFamily: 'Poppins-Regular',
    // flexWrap: 'wrap',
  },
  typeTitle: {
    color: Colors.text,
    fontSize: normalize(24),
    fontWeight: '400',
  },
  typeBody: {
    color: Colors.text,
    fontSize: normalize(15),
    fontWeight: '400',
  },
  typeMedium: {
    color: Colors.text,
    fontSize: normalize(14),
    fontWeight: '400',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  typeSmall: {
    color: Colors.text,
    fontSize: normalize(12),
    fontWeight: '400',
  },
  centerText: {
    textAlign: 'center',
  },
  boldText: {
    fontWeight: '700',
  },
  textGray: {
    color: Colors.gray_400,
  },
  textYellow: {
    color: Colors.yellow,
  },
  textGreen: {
    color: Colors.green,
  },
  h2: {
    fontSize: normalize(18),
  },
  linkText: {
    color: Colors.green,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});
