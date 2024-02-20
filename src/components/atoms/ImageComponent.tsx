import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import React from 'react';
import normalize from '../../helpers/normalizeFontSize';

interface ImageComponentProps extends ImageProps {
  source?: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}

const ImageComponent = (props: ImageComponentProps) => {
  return (
    <Image
      testID={props.testID ? props.testID : 'ImageComponentID'}
      source={props.source}
      style={[styles.image, props.style]}
      resizeMode={props.resizeMode || 'contain'}
      {...props}
    />
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: normalize(300),
  },
});
