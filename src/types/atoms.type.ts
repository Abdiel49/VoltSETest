import {StyleProp, TextInputProps, TextProps, TextStyle} from 'react-native';

export interface LoadingModalProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ILoadingProps {
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

export type TypeOfTextComponent = 'title' | 'body' | 'small' | 'medium';

export interface TextComponentProps extends TextProps {
  testID?: string;
  text: string | number;
  type?: TypeOfTextComponent;
  center?: boolean;
  bold?: boolean;
  style?: StyleProp<TextStyle>;
  isUnderline?: boolean;
  onPress?: () => void;
  gray?: boolean;
  yellow?: boolean;
  green?: boolean;
  H2?: boolean;
}

export interface TextInputComponentProps extends TextInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
}
