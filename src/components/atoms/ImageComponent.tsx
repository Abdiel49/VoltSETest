import {
  ActivityIndicator,
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../styles/colors';
import normalize from '../../helpers/normalizeFontSize';

export interface ImageComponentProps extends ImageProps {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  size?: 'large' | 'medium' | 'small' | 'extra-small';
}

const ImageComponent = (props: ImageComponentProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [onError, setOnError] = useState<boolean>(false);

  const handleError = () => {
    setLoading(false);
    setOnError(true);
  };

  return (
    <View
      style={[
        styles.image,
        props.size === 'large' ? styles.large : null,
        props.size === 'medium' ? styles.medium : null,
        props.size === 'small' ? styles.small : null,
        props.size === 'extra-small' ? styles.extraSmall : null,
        props.style,
      ]}>
      {onError && (
        <View style={styles.iconContainer}>
          <MaterialIcons name="broken-image" style={styles.icon} />
        </View>
      )}
      {loading && (
        <View style={styles.iconContainer}>
          <ActivityIndicator color={Colors.green} size={normalize(60)} />
        </View>
      )}
      <Image
        {...props}
        testID={props.testID ? props.testID : 'ImageComponentID'}
        source={props.source}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onError={handleError}
        style={[
          styles.image,
          props.size === 'large' ? styles.large : null,
          props.size === 'medium' ? styles.medium : null,
          props.size === 'small' ? styles.small : null,
          props.size === 'extra-small' ? styles.extraSmall : null,
          props.style,
        ]}
        resizeMode={props.resizeMode || 'contain'}
      />
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: normalize(300),
  },
  large: {
    maxWidth: normalize(300),
    maxHeight: normalize(300),
    width: normalize(300),
    height: normalize(300),
  },
  medium: {
    maxWidth: normalize(200),
    maxHeight: normalize(200),
    width: normalize(200),
    height: normalize(200),
  },
  small: {
    maxWidth: normalize(120),
    maxHeight: normalize(120),
    width: normalize(120),
    height: normalize(120),
  },
  extraSmall: {
    height: normalize(80),
    width: normalize(80),
    maxHeight: normalize(80),
    maxWidth: normalize(80),
  },
  icon: {
    color: Colors.gray_400,
    fontSize: normalize(60),
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
